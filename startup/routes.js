const cors = require("cors");
const express = require("express");
const { errorHandler, notFound } = require("../middleware/errorMiddleware");
const userRoutes = require("../routes/userRoutes");
const emailRoutes = require("../routes/emailRoutes");
const uniRoutes = require("../routes/uniRoutes");
const statsRoutes = require("../routes/statsRoutes");

module.exports = function (app) {
  app.use(express.json());
  // app.use(cors());
  app.use(
    cors({
      origin: process.env.REMOTE_CLIENT_APP,
      accessControlAllowOrigin: process.env.REMOTE_CLIENT_APP,
      credentials: true,
    })
  );
  app.use("/api/users", userRoutes);
  app.use("/api/email", emailRoutes);
  app.use("/api/universities", uniRoutes);
  app.use("/api/statistics", statsRoutes);
  app.use(errorHandler);
  app.use(notFound);
};
