const express= require('express');
const cors=require('cors');
const bodyParser= require('body-parser');

const app= express();


const port= process.env.port || 8080 //Used for server port

const mongoose=require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://ashenanu:ashenanu123@fitfreak.cokvs0x.mongodb.net/fitfreak',(err)=>{ 
    if(err){
        console.log("Database is not connected!",err);
    }
    else{
        console.log("DB is connected");
    }
});
const authRoute= require('./routes/auth-route');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credential:true
}));
app.use('/auth',authRoute)
app.get('/',(req,res)=>{
    res.send("Welcome to Ashens server")
})



app.listen(port,()=>{
    console.log("Node server is connected: ",port)
})