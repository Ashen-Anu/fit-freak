const mongoose = require('mongoose');



const Schema= mongoose.Schema;

const workoutSchema= new Schema({
    day:{type:String},
    workout1:{type:String,required:false},
    workout2:{type:String,required:false},
    workout3:{type:String,required:false},
    workout4:{type:String,required:false},
    workout5:{type:String,required:false},
    workout6:{type:String,required:false},
    workout7:{type:String,required:false},
    workout8:{type:String,required:false},
    workout9:{type:String,required:false},
    workout10:{type:String,required:false},
})

module.exports= mongoose.model('Workout',workoutSchema)