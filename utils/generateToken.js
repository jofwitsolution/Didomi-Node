const config = require('config');
const jwt = require('jsonwebtoken');

const generateToken = (id, firstName, lastName, isAdmin) => {
  return jwt.sign(
    { id, firstName, lastName, isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};

module.exports.generateToken = generateToken;
