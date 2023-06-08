const mongoose = require('mongoose');
const router= require('express').Router();
const User= require('../models/user');
const bcrypt = require('bcrypt');
const WriteRev= require('../models/reviews');
const Sunwa= require('../models/sunwaReg');
const Workout = require('../models/workout');
const chats= require("../models/chats");
const { json } = require('body-parser');
const schedule = require('../models/schedule');

router.post('/register',(req,res)=>{
    bcrypt.hash(req.body.password, 10,(err, hash)=>{
        if(err){
            return res.json({success:false, message:"Hash Error !"})
        }
        else{
            const user=new User({
                username:req.body.username,  
                email:req.body.email,
                password:hash, 
            })
            user.save()
            .then((_)=>{
                res.json({success:true, message:"Account has been successfully created 💪"})
            })
            .catch((err)=>{
                if(err.code === 11000){
                    return res.json({success:false, message:"Email is already in use!"})
                }
                res.json({success:false, message:"Authentication failed!!!!!!"})
            })
            
        }
    })
})
router.route('/sunwaregister').get((req,res)=>{
    Sunwa.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
        }
    })
})
router.route('/getusers').get((req,res)=>{
    User.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
        }
    })
})
router.route('/getworkout').get((req,res)=>{
    Workout.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
        }
    })
})
router.get('/getSchedule',(req,res)=>{

    schedule.find((error,data)=>{
        if(error){
            console.log("Error Loading data");
        }
        else{
            res.json(data);
        }
    })
})
router.post('/home',(req,res)=>{
    const sunwa=new Sunwa({
        email:req.body.email,  
        category:req.body.category
    })
    sunwa.save()
    .then((_)=>{
        res.json({success:true, message:"We will email/text you the details shortly 💪"})
    })
    .catch((err)=>{
        res.json({success:false, message:"Authentication failed!!!!!!"+err})
    })
})

router.post('/addworkout',(req,res)=>{
    const workout=new Workout({
        day:req.body.day,  
        workout1:req.body.workout1,
        workout2:req.body.workout2,
        workout3:req.body.workout3,
        workout4:req.body.workout4,
        workout5:req.body.workout5,
        workout6:req.body.workout6,
        workout7:req.body.workout7,
        workout8:req.body.workout8,
        workout9:req.body.workout9,
        workout10:req.body.workout10,
    })
    workout.save()
    .then((_)=>{
        res.json({success:true, message:"Workout Added. Train Hard💪"})
    })
    .catch((err)=>{
        res.json({success:false, message:"Authentication failed!!!!!!"})
    })
})
router.post('/addschedule',(req,res)=>{
    const Schedule=new schedule({
        username:req.body.username,
        event1:req.body.event1,
        event2:req.body.event2,
        event3:req.body.event3,
        event4:req.body.event4,
        event5:req.body.event5,
        event6:req.body.event6,
        event7:req.body.event7,
        event8:req.body.event8,
        event9:req.body.event9,
        event10:req.body.event10,
    })
    Schedule.save()
    .then((_)=>{
        res.json({success:true, message:"Schedule Added. Train Hard💪"})
    })
    .catch((err)=>{
        res.json({success:false, message:"Error"+err})
    })
})

router.post('/sendMessage',(req,res)=>{
    const Chat=new chats({
        message:req.body.message,
        name:req.body.name,
    })
    Chat.save()
    .then((_)=>{
        res.json({success:true})
    })
    .catch((err)=>{
        res.json({success:false})
    })
})
router.route('/postChats').get((req,res)=>{
    chats.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
        }
    })
})

router.post('/writereviews',(req,res)=>{
    const writerev=new WriteRev({
        email:req.body.email,
        review:req.body.review,
    })
    writerev.save()
    .then((_)=>{
        res.json({success:true, message:"Review Added. Thank you💪"})
    })
    .catch((err)=>{
        res.json({success:false, message:"Error"+err})
    })
})

router.route('/getreviews').get((req,res)=>{
    WriteRev.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
        }
    })
})

router.post('/login',(req,res)=>{
    User.find({username:req.body.username}).exec().then((result)=>{
        if(result.length < 1){
            return res.json({success:false, message:"User isn't registered to FitFreak"})
        }
        const user=result[0]
        // Load hash from your password DB.
        bcrypt.compare(req.body.password, user.password,(err, ret)=>{
            if(ret){
                const payload={
                    userId: user._id,
                }
                    return res.json({success:true, message:"Successfully Logged in to fit freak. Train Hard 💪"})
            }else{
                return res.json({success:false, message:"Username or password is incorrect"})
            }
        })
    }).catch(err=>{
        res.json({success:false,message:"Authentication Failed!"})
    })
})

module.exports= router