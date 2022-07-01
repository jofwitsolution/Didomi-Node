const cors = require("cors");
const express = require("express");
const { errorHandler, notFound } = require("../middleware/errorMiddleware");
const userRoutes = require("../routes/userRoutes");

module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use("/api/users", userRoutes);
  app.use(errorHandler);
  app.use(notFound);
};
