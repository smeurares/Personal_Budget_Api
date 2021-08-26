const express = require("express");
const indexRouter = express.Router();
const envelopesRouter = require("./envelopes");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");
const authRouter = require("./users");
const passport = require('passport');
const session = require("express-session");
const LocalStrategy = require("passport").Strategy;

indexRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

indexRouter.use("/envelopes", envelopesRouter);

indexRouter.use("/auth", authRouter)


indexRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});



module.exports = indexRouter;
