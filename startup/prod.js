const helmet = require("helmet");
const compression = require("compression");

module.exports = function (app) {
  app.use(helmet()); // protect the app from web vulnerabilities
  app.use(compression()); // compress the route handlers
};
