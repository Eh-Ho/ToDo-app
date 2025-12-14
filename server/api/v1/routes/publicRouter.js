const express = require("express");
const AuthController = require("../controllers/public/AuthController");
const publicRouter = express.Router();

publicRouter.route("/login").post(AuthController.login);
publicRouter.route("/signup").post(AuthController.signUp);
publicRouter.route("/refresh").post(AuthController.refresh);

module.exports = publicRouter;
