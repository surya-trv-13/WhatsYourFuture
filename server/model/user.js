const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

var Schema = mongoose.Schema

var userSchema = new Schema({
    email : {
        required : true,
        type : String,
        minlength : 1,
        validate : {
            validator : validator.isEmail,
            message : '{VALUE} is not validated'
        }
    },
    password : {
        required : true,
        type : String,
        minlength : 6
    },
    tokens : [{
        access : {
            type : String,
            required : true
        },
        token : {
            type: String,
            required : true
        }
    }]
})

userSchema.pre('save' , async function(next){
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password , 8)
    }

    next()
})

var UserModel = mongoose.model('UserData' , userSchema)

module.exports = {UserModel}