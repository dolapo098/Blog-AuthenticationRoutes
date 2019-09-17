const mongoose = require ('mongoose');
const schema = mongoose.Schema({
    title: String,
    author: String,
    body: String,
    date: Date
})
module.exports= mongoose.model('models', schema);