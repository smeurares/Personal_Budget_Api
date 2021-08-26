const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const crypto = require("crypto");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { findUserByEmail } = require("./controllers/signUp");
const bcrypt = require("bcrypt");

const initialize = (passport, findUserByEmail, getUserById) => {
  const authenticateUser = async (email, password, done) => {
    const user = await findUserByEmail(email);

    if (user == null) {
      console.log("Here");
      return done(null, false, { message: "Email not found!" });
    }
    try {
      const compare = await bcrypt.compare(
        String(password),
        String(user.password)
      );
      if (compare) {
        console.log(user);
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect!" });
      }
    } catch (error) {
      return done(error);
    }
  };

  passport.use(
    new Strategy(
      {
        usernameField: "email",
      },
      authenticateUser
    )
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
};

module.exports = initialize;
