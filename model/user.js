const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    name:{
        type: String
    },
    phone: {
        type : String
    },
    password: {
        type : String
    }
    
})

exports.User = mongoose.model('User', UserSchema)