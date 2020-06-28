const {mongoose} = require('../DBManager/db')
const validator = require('validator')

var Schema = mongoose.Schema

var userSchema = new Schema({
    email : {
        required : true,
        type : String,
        minlength : 1,
        unique : true,
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

var UserModel = mongoose.model('UserData' , userSchema)

module.exports = {UserModel}