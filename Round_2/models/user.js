const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String, 
    phone_number: String, 
    email: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;