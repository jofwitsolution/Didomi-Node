const { User, validate } = require("../models/userModel");
const { generateToken } = require("../utils/generateToken");

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = async (req, res) => {
  const { error } = validate(req.body, "login");
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      token: generateToken(
        user._id,
        user.firstName,
        user.lastName,
        user.isAdmin
      ),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = async (req, res) => {
  const { error } = validate(req.body, "register");

  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  let {
    firstName,
    lastName,
    email,
    phone,
    country,
    level,
    policy,
    contactMe,
    password,
  } = req.body;

  email = email.toLowerCase();

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    country,
    level,
    policy,
    contactMe,
    password,
  });

  if (user) {
    res.json({
      token: generateToken(
        user._id,
        user.firstName,
        user.lastName,
        user.isAdmin
      ),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select(
    "-password -policy -contactMe -__v"
  );

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = async (req, res) => {
  const { error } = validate(req.body, "update");
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const user = await User.findById(req.user._id);

  if (user) {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.phone = req.body.phone;
    user.country = req.body.country;
    user.level = req.body.level;
    user.bio = req.body.bio;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      phone: user.phone,
      country: user.country,
      level: user.level,
      bio: user.bio,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

// @desc Get all users
// @route GET /api/users
// @access Private/Admin
const getUsers = async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const count = await User.countDocuments({});
  const users = await User.find({})
    .select("-password -isAdmin -__v")
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ users, page, pages: Math.ceil(count / pageSize) });
};

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password -__v");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

// @desc Update user
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = async (req, res) => {
  const { error } = validate(req.body, "adminUpdate");
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const user = await User.findById(req.params.id);

  if (user) {
    const email = req.body.email.toLowerCase();

    // if email is not the existing email
    if (user.email != email) {
      // find the new email if it does not already exist
      const userExists = await User.findOne({ email });

      if (userExists) {
        res.status(400);
        throw new Error("User already exists");
      }
    }

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = email;
    user.phone = req.body.phone;
    user.country = req.body.country;
    user.level = req.body.level;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

module.exports.authUser = authUser;
module.exports.registerUser = registerUser;
module.exports.getUserProfile = getUserProfile;
module.exports.updateUserProfile = updateUserProfile;
module.exports.getUsers = getUsers;
module.exports.deleteUser = deleteUser;
module.exports.getUserById = getUserById;
module.exports.updateUser = updateUser;
