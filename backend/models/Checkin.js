const mongoose= require('mongoose')

const Schema=mongoose.Schema

const checkinSchema =new Schema({
    index:{
        type: String,
        required: true
    },

},{timestamps: true})

module.exports=mongoose.model('Checkin', checkinSchema)