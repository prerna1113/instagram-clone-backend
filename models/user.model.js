const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    "email" :{type :String, requires: true},
    "password":{type :String , requires: true},
    "name":{type :String , requires: true},
    "gender":{type :String , requires: true}
},{
    versionKey:false,
    timestamps:true,
})

userSchema.pre('save',function(next){
    if(! this.isModified("password"))return next();
    let hash = bcrypt.hashSync(this.password,8);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

const User = mongoose.model('user',userSchema);

module.exports = User;