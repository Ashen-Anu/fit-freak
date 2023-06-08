const mongoose = require('mongoose');



const Schema= mongoose.Schema;

const writerev= new Schema({
    email:{type:String},
    review:{type:String, unique: false},   

})

module.exports= mongoose.model('WriteRev',writerev)