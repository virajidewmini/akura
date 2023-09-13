const { default: mongoose } = require('mongoose')
const Checker = require('../models/Checker')

//create a new teacher

const createChecker= async (req,res)=>{
    const {firstName,lastName,email,phoneNumber}=req.body
    try{
        const checker= await Checker.create({firstName,lastName,email,phoneNumber})
        res.status(200).json(checker)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

//get all students

const getCheckers= async(req,res)=>{
    const teacher=await Checker.find({}).sort({createdAt: -1})

    res.status(200).json(checker)
}

//get a single workouts

const getChecker = async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such checker'})
    }
    const checker=await Checker.findById(id)

    if(!checker){
        return res.status(404).json({error:'No such checker'})
    }
    
    res.status(200).json(checker)
}

//delete workout

const deleteChecker= async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such checker'})
    }

    const checker=await Checker.findOneAndDelete({_id: id})

    if(!checker){
        return res.status(404).json({error:'No such checker'})
    }
    
    res.status(200).json(checker)
}

//update workout

const updateChecker=async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such checker'})
    }

    const checker=await Checker.findByIdAndUpdate({_id:id},{
        ...req.body
    })

    if(!checker){
        return res.status(404).json({error:'No such checker'})
    }

    res.status(200).json(checker)
}

module.exports={

    getChecker,
    getCheckers,
    createChecker,
    deleteChecker,
    updateChecker
}
