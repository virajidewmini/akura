const { default: mongoose } = require('mongoose')
const Checkin = require('../models/Checkin')

const Class=require('../models/Checkin')

//create a new teacher

const createCheckin= async (req,res)=>{
    const {indexNo,attendence}=req.body
    try{
        const checkin= await Checkin.create({indexNo,attendence})
        res.status(200).json(checkin)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

//get all students

const getCheckins= async(req,res)=>{
    const checkin=await Checkin.find({}).sort({createdAt: -1})

    res.status(200).json(checkin)
}

//get a single workouts

const getCheckin = async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such classes'})
    }
    const checkin=await Checkin.findById(id)

    if(!checkin){
        return res.status(404).json({error:'No such classes'})
    }
    
    res.status(200).json(checkin)
}

//delete workout

const deleteCheckin= async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such classes'})
    }

    const checkin=await Checkin.findOneAndDelete({_id: id})

    if(!checkin){
        return res.status(404).json({error:'No such classes'})
    }
    
    res.status(200).json(checkin)
}

//update workout

const updateCheckin=async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such classes'})
    }

    const checkin=await Checkin.findByIdAndUpdate({_id:id},{
        ...req.body
    })

    if(!checkin){
        return res.status(404).json({error:'No such classes'})
    }

    res.status(200).json(checkin)
}

module.exports={
    getCheckin,
    getCheckins,
    createCheckin,
    deleteCheckin,
    updateCheckin
}
