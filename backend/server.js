require('dotenv').config()
var express = require('express'); 

const mongoose=require('mongoose')

const studentRoute= require('./routes/student')
const teacherRoute= require('./routes/teacher')
const classRoute= require('./routes/class')
const checkerRoute= require('./routes/checker')

var app = express();  

//middleware

app.use(express.json())

app.use((req,res, next)=>{
    console.log(req.path, req.method)
    next()
})
app.use('/api/student',studentRoute)
app.use('/api/teacher',teacherRoute)
app.use('/api/class',classRoute)
app.use('/api/checker',checkerRoute)

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

