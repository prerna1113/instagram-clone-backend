const mongoose= require('mongoose');

const connect = ()=>{
    return mongoose.connect('mongodb+srv://Prerna:1234@cluster0.of1bchb.mongodb.net/?retryWrites=true&w=majority');
}

module.exports = connect;