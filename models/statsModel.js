const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Joi = require("joi");

const statsSchema = mongoose.Schema(
  {
    applicants: {
      type: Number,
      required: true,
    },
    availableUniversities: {
      type: Number,
      required: true,
    },
    alumni: {
      type: Number,
      required: true,
    },
    successRate: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
  { collation: { locale: "en", strength: 2 } }
);

const Statistics = mongoose.model("Statistics", statsSchema);

function validateStats(stats) {
  const schema = Joi.object({
    applicants: Joi.number().required().label("Applicants"),
    availableUniversities: Joi.number()
      .required()
      .label("Available universities"),
    alumni: Joi.number().required().label("Alumni"),
    successRate: Joi.number().required().label("Success rate"),
  });

  return schema.validate(stats);
}

module.exports.Statistics = Statistics;
module.exports.validate = validateStats;
