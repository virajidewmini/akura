const mongoose= require('mongoose')

const Schema=mongoose.Schema

const studentSchema =new Schema({
    indexNo:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    parentName:{
        type: String,
        required: true
    },
    parentEmail:{
        type: String,
        required: true
    },
    parentPhone:{
        type: String,
        required: true
    },
},{timestamps: true})

module.exports=mongoose.model('Student', studentSchema)