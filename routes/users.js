const { EWOULDBLOCK } = require("constants");
const express = require("express");
const { get } = require("node:https");
const authRouter = express.Router();
const passport = require("passport");

const { signUp, getAllUsers } = require("../controllers/signUp");

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}


authRouter.post("/signup",checkNotAuthenticated, signUp);

authRouter.get("/signup", getAllUsers);

authRouter.get("/login", (req, res) => {
  if(req.isAuthenticated){
    res.redirect('/auth/content')
  } else {
    res.redirect('/auth/login')
  }
})


authRouter.post('/login', passport.authenticate('local', {
  successRedirect: `/auth/content`,
  failureRedirect: '/auth/login',
  failureFlash: true
}))


authRouter.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/')
})


authRouter.get("/content", async (req, res) => {
  if(req.isAuthenticated){
    console.log(req.user)
    const {id, email, name} = await req.user;
    
    res.json({id: id, email: email, name: name, authenticated: true})
  } else {
    res.json({succes: false, autheticated: false})
  }
  
})



module.exports = authRouter;
