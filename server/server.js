const {getHoroscope} = require('./services/service')
const {UserModel} = require('./model/user') 

const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const { response } = require('express')

var PORT = process.env.PORT
var app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/' , (request , response) => {
    var zodiac = request.query.zodiac[0].toUpperCase() + request.query.zodiac.slice(1)
    
    getHoroscope(zodiac).then((res) => {
        response.status(200).send({result : res.data[zodiac]});
    }).catch((error) => {
        response.status(500).send({error})
    }) 
})

// POST /user
app.post('/user' , (request , response) => {
    var body = _.pick(request.body, ['email' , 'password'])

    var user = new UserModel(body)
    user.save().then((res) => {
        response.status(200).send({res})
    }).catch((error) => {
        response.status(400).send({error})
    })
})
app.listen(PORT , () => {
    console.log(`Listening to PORT => ${PORT}`);
})
