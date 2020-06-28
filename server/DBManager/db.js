const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI , { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
 })

module.exports = {
    mongoose
}