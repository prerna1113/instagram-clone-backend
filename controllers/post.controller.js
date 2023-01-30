const posts = require("../models/post.models");


const postBlog=async(req,res)=>{
    try{
        const Posts = await posts.create(req.body)
        return res.status(200).send("ur post has been added successfully")

    }catch(error){
        return res.status(500).send(error)
    }
}


const getPost = async(req, res)=>{
    try{
        const post = await posts.find()
        return res.status(200).send(post)
    }catch(error){
        return res.status(500).send(error)
    }
}

const deleteBlog = async(req, res)=>{
    try{
        const post = await posts.findByIdAndDelete(req.params.id)
        return res.status(200).send(post)
    }catch(error){
        return res.status(500).send(error)
}
}
module.exports = {
    getPost,
    postBlog,
    deleteBlog
}