const { default: mongoose } = require('mongoose')
const Teacher = require('../models/Teacher')

//create a new teacher

const createTeacher= async (req,res)=>{
    const {firstName,lastName,email,phoneNumber,address,subject,grades}=req.body
    try{
        const teacher= await Teacher.create({firstName,lastName,email,phoneNumber,address,subject,grades})
        res.status(200).json(teacher)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

//get all students

const getTeachers= async(req,res)=>{
    const teacher=await Teacher.find({}).sort({createdAt: -1})

    res.status(200).json(teacher)
}

//get a single workouts

const getTeacher = async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such teacher'})
    }
    const teacher=await Teacher.findById(id)

    if(!teacher){
        return res.status(404).json({error:'No such teacher'})
    }
    
    res.status(200).json(teacher)
}

//delete workout

const deleteTeacher= async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such teacher'})
    }

    const teacher=await Teacher.findOneAndDelete({_id: id})

    if(!teacher){
        return res.status(404).json({error:'No such teacher'})
    }
    
    res.status(200).json(teacher)
}

//update workout

const updateTeacher=async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such teacher'})
    }

    const teacher=await Teacher.findByIdAndUpdate({_id:id},{
        ...req.body
    })

    if(!teacher){
        return res.status(404).json({error:'No such teacher'})
    }

    res.status(200).json(teacher)
}

module.exports={
    getTeacher,
    getTeachers,
    createTeacher,
    deleteTeacher,
    updateTeacher
}
