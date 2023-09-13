require('dotenv').config()
var express = require('express'); 

const mongoose=require('mongoose')

const studentRoute= require('./routes/student')
var app = express();  

//middleware

app.use(express.json())

app.use((req,res, next)=>{
    console.log(req.path, req.method)
    next()
})
app.use('/api/students',studentRoute)

//connect db
mongoose.connect(process.env.MONG_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('Connected to db.listening on port ',process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})

