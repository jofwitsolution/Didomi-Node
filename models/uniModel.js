const mongoose = require("mongoose");
const Joi = require("joi");

const uniSchema = mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    schools: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true },
  { collation: { locale: "en", strength: 2 } }
);

const Universities = mongoose.model("Universities", uniSchema);

function validateUniversities(universities) {
  const schema = Joi.object({
    country: Joi.string().required().label("Country"),
    schools: Joi.Array().required().label("Schools"),
  });

  return schema.validate(universities);
}

module.exports.Universities = Universities;
module.exports.validate = validateUniversities;
