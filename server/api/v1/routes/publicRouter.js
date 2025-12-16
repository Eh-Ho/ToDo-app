const express = require("express");
const AuthController = require("../controllers/public/AuthController");
const publicRouter = express.Router();
const Validator = require("../middlewares/validator");
const {
  loginValidation,
  signupValidation,
} = require("../validations/authValidation");

publicRouter
  .route("/login")
  .post(loginValidation, Validator, AuthController.login);
publicRouter
  .route("/signup")
  .post(signupValidation, Validator, AuthController.signUp);
publicRouter.route("/refresh").post(AuthController.refresh);

module.exports = publicRouter;
