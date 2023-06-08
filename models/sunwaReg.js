const mongoose = require('mongoose');



const Schema= mongoose.Schema;

const Sunwa= new Schema({
    email:{type:String},
    category:{type:String},   

})

module.exports= mongoose.model('Sunwa',Sunwa)