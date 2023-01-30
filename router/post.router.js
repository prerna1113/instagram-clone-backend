
const express = require('express');
const { getPost, postBlog, deleteBlog } = require('../controllers/post.controller');
const isLoggedIn = require('../middlewares/auth.middleware');

const postRouter = express.Router();

postRouter.get('/',isLoggedIn, getPost)

postRouter.post("/update",isLoggedIn,postBlog);
postRouter.delete('/delete/:id',isLoggedIn,deleteBlog)



module.exports = postRouter;