const mongoose = require('mongoose');



const Schema= mongoose.Schema;

const scheduleSchema= new Schema({
    username:{type:String, required:false},
    event1:{type:String, required:false}, 
    event2:{type:String, required:false}, 
    event3:{type:String, required:false}, 
    event4:{type:String, required:false}, 
    event5:{type:String, required:false}, 
    event6:{type:String, required:false}, 
    event7:{type:String, required:false}, 
    event8:{type:String, required:false}, 
    event9:{type:String, required:false}, 
    event10:{type:String, required:false}, 
})

module.exports= mongoose.model('schedule',scheduleSchema)