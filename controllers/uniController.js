const { Universities, validate } = require("../models/uniModel");

// @desc Get all universities
// @route GET /api/universities
// @access Public
const getUniversities = async (req, res) => {
  let universities = await Universities.find({}).select("-__v");

  let uniList = [];

  if (universities.length > 0) {
    //create new university obj that will be send to the client
    for (uni of universities) {
      const newUni = {
        main: uni.country,
        sub: uni.schools,
        showDropdown: false,
      };

      uniList.push(newUni);
    }

    universities = [...uniList];
  }

  // console.log(universities);
  res.json(universities);
};

// @desc Get university
// @route GET /api/universities/search
// @access Public
const searchUniversities = async (req, res) => {
  console.log(req.query.keyword);
  const keyword = req.query.keyword
    ? {
        $regex: req.query.keyword,
        $options: "i",
      }
    : {};

  // let universities = await Universities.find({
  //   "schools.name": { ...keyword },
  // }).select("-__v");

  let universities = await Universities.find(
    { "schools.name": { ...keyword } },
    {
      schools: { $elemMatch: { name: { ...keyword } } },
      country: 1,
    }
  );

  // console.log(universities);
  res.json(universities);
};

module.exports.getUniversities = getUniversities;
module.exports.searchUniversities = searchUniversities;
