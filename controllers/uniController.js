const { Universities, validate } = require("../models/uniModel");

// @desc Get all universities
// @route GET /api/universities
// @access Public
const getUniversities = async (req, res) => {
  let universities = await Universities.find({}).select("-__v");

  let uniList = [];

  if (universities.length > 0) {
    for (uni of universities) {
      const newUni = {
        main: uni.country,
        sub: uni.schools,
        showDropDown: false,
      };

      uniList.push(newUni);
    }

    universities = [...uniList];
  }

  console.log(universities);
  res.json(universities);
};

module.exports.getUniversities = getUniversities;
