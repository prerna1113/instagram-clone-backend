
const express = require('express');
const { login, register } = require('../controllers/auth.controller');
const { getPost, postBlog, deleteBlog } = require('../controllers/post.controller');

const userRouter = express.Router();

userRouter.post('/login', login)

userRouter.post("/register",register);


module.exports = userRouter;