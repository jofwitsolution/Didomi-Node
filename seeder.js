const mongoose = require("mongoose");
const colors = require("colors");
const universities = require("./data/university");
const { Universities } = require("./models/uniModel");
const { mongodb } = require("./startup/db");

require("./startup/config")();

mongodb();

// import data to mongodb
const importData = async () => {
  try {
    await Universities.deleteMany();

    const createUniversities = await Universities.insertMany(universities);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Universities.deleteMany();

    console.log("Data Destroyed!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// if -d argument is passed from the console
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
