const express = require("express");
const allRouter = express.Router();
const userRouter = require('./modules/user');
allRouter.use('/user', userRouter)
module.exports = allRouter
