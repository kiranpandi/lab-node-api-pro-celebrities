const mongoose = require('mongoose'),Schema = mongoose.Schema;

const UserDetail = new Schema({
    name:String,
    email:String,
    phone:Number,
    type:String
})

const User = mongoose.model('User',UserDetail);

module.exports = {User};