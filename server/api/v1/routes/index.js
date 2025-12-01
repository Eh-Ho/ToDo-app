const express  = require('express');
const isAuthenticated = require(`${config.path.middlewares}/isAuthenticated`);
const isAdmin = require(`${config.path.middlewares}/isAdmin`);
const APIRouter = express.Router();

// routers
const publicRouter = require('./publicRouter');
const adminRouter = require('./adminRouter');
const userRouter = require('./userRouter');


// middlewares



APIRouter.use('/v1', publicRouter);
APIRouter.use('/v1/user', isAuthenticated, userRouter);
APIRouter.use('/v1/admin', isAuthenticated, isAdmin, adminRouter);


module.exports = APIRouter;