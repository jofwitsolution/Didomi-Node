const { Statistics, validate } = require("../models/statsModel");

// @desc Get stats
// @route GET /api/statistics
// @access Public
const getStats = async (req, res) => {
  let statistics = await Statistics.find({}).select("-__v");

  if (statistics.length > 0) {
    statistics = statistics[0];
  }

  res.json(statistics);
};

// @desc update stats
// @route GET /api/statistics/:id
// @access Private / Admin
const updateStats = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const statistics = await Statistics.findById(req.params.id);

  if (statistics) {
    statistics.applicants = req.body.applicants;
    statistics.availableUniversities = req.body.availableUniversities;
    statistics.alumni = req.body.alumni;
    statistics.successRate = req.body.successRate;

    const updatedStats = await statistics.save();

    res.json({ message: "Update successful." });
  } else {
    res.status(404);
    throw new Error("Statistics not found");
  }
};

module.exports.getStats = getStats;
module.exports.updateStats = updateStats;
