const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./DBManager/db')

//Router
const userRouter = require('./router/user')
const apiFetchRouter = require('./router/apiFetch')

var PORT = process.env.PORT
var app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(userRouter)
app.use(apiFetchRouter)

app.listen(PORT , () => {
    console.log(`Listening to PORT => ${PORT}`);
})
