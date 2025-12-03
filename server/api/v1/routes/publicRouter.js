const express = require('express');
const AuthController = require('../controllers/public/AuthController');
const publicRouter = express.Router();

publicRouter.route('/login').post(AuthController.login);
publicRouter.route('/signup').post(AuthController.signUp);

module.exports = publicRouter;