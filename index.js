const express = require('express');
const connect = require('./config/db');
const cors = require('cors');
const userRouter = require('./router/user.router');
const postRouter = require('./router/post.router');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users',userRouter)
app.use('/posts',postRouter)

const port = process.env.PORT || 8080;
app.listen(port , async(req,res)=>{
    try {
        await connect();
        console.log(`sever is running on port ${port}`);

    }catch(error){
        console.log(error.message);

    }
    
});