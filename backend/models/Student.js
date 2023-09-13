const mongoose= require('mongoose')

const Schema=mongoose.Schema

const studentSchema =new Schema({
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
        type: Date,
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