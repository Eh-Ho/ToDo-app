const express  = require('express');

const APIRouter = express.Router();

// routers
const publicRouter = require('./publicRouter');
const adminRouter = require('./adminRouter');
const userRouter = require('./userRouter');


// middlewares



APIRouter.use('/v1', publicRouter);
APIRouter.use('/v1/user', userRouter);
APIRouter.use('/v1/admin', adminRouter);


module.exports = APIRouter;