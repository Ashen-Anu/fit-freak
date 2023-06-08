
const mongoose = require('mongoose');



const Schema= mongoose.Schema;

const Chats= new Schema({
    message:{type:String},
    name:{type:String},   

})

module.exports= mongoose.model('chats',Chats)