const { default: mongoose } = require('mongoose')
const Student=require('../models/Student')

//create a new student

const createStudent= async (req,res)=>{
    const {firstName,lastName,email,gender,phoneNumber,dob,parentName,parentEmail,parentPhone}=req.body
    try{
        const student= await Student.create({firstName,lastName,email,gender,phoneNumber,dob,parentName,parentEmail,parentPhone})
        res.status(200).json(student)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

//get all students

const getStudents= async(req,res)=>{
    const student=await Student.find({}).sort({createdAt: -1})

    res.status(200).json(student)
}

//get a single workouts

const getStudent = async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such student'})
    }
    const student=await Student.findById(id)

    if(!student){
        return res.status(404).json({error:'No such student'})
    }
    
    res.status(200).json(student)
}

//delete workout

const deleteStudent= async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such student'})
    }

    const student=await Student.findOneAndDelete({_id: id})

    if(!student){
        return res.status(404).json({error:'No such student'})
    }
    
    res.status(200).json(student)
}

//update workout

const updateStudent=async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such student'})
    }

    const student=await Student.findByIdAndUpdate({_id:id},{
        ...req.body
    })

    if(!student){
        return res.status(404).json({error:'No such student'})
    }

    res.status(200).json(student)
}

module.exports={
    getStudent,
    getStudents,
    createStudent,
    deleteStudent,
    updateStudent
}