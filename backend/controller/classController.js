const { default: mongoose } = require('mongoose')

const Class=require('../models/Class')

//create a new teacher

const createClass= async (req,res)=>{
    const {grade,subject,teacherName,date,time,hall}=req.body
    try{
        const classes= await Class.create({grade,subject,teacherName,date,time,hall})
        res.status(200).json(classes)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

//get all students

const getClasses= async(req,res)=>{
    const classes=await Class.find({}).sort({createdAt: -1})

    res.status(200).json(classes)
}

//get a single workouts

const getClass = async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such classes'})
    }
    const classes=await Class.findById(id)

    if(!classes){
        return res.status(404).json({error:'No such classes'})
    }
    
    res.status(200).json(classes)
}

//delete workout

const deleteClass= async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such classes'})
    }

    const classes=await Class.findOneAndDelete({_id: id})

    if(!classes){
        return res.status(404).json({error:'No such classes'})
    }
    
    res.status(200).json(classes)
}

//update workout

const updateClass=async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such classes'})
    }

    const classes=await Class.findByIdAndUpdate({_id:id},{
        ...req.body
    })

    if(!classes){
        return res.status(404).json({error:'No such classes'})
    }

    res.status(200).json(classes)
}

module.exports={
    getClass,
    getClasses,
    createClass,
    deleteClass,
    updateClass
}
