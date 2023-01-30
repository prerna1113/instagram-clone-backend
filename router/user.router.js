
const express = require('express');
const { login, register } = require('../controllers/auth.controller');


const userRouter = express.Router();

userRouter.post('/login', login)

userRouter.post("/register",register);


module.exports = userRouter;