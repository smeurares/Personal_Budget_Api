const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const initializePassport = require("./auth");
const indexRouter = require("./routes/index");
const app = express();
const passport = require("passport");
const { PrismaClient } = require("@prisma/client");
const flash = require("express-flash");
const session = require("express-session");
const { json } = require("express");
const prisma = new PrismaClient();
const cors = require("cors");

initializePassport(
  passport,
  async (email) => {
    const users = await prisma.user.findMany();
    console.log(users)
    if (users) {
      const user = users.find((user) => user.email === email);
      console.log(user)
      return user
    }
  },
  async (id) => {
    const users = await prisma.user.findMany();
    if (users) {
      const user = users.find((user) => user.id === id);
      console.log(user);
      return user;
    }
  }
)


// view engine setup
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors())
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(logger("dev"));
app.use(express.json());

const corsOptions = {
  credentials: true,
};




app.use("/", indexRouter);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
