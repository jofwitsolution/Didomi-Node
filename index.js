const morgan = require("morgan");
const express = require("express");
const { errorLogger, infoLogger } = require("./startup/errorLogging");
const { mongodb } = require("./startup/db");
const app = express();

errorLogger();

require("./startup/config")();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

require("./startup/routes")(app);
mongodb();

const port = process.env.PORT || 3006;
app.listen(port, () => infoLogger(`Listening on port ${port}...`));
