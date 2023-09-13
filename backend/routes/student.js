const express=require('express')
const Workout=require('../models/Student')
const {
    getStudent,
    getStudents,
    createStudent,
    deleteStudent,
    updateStudent
}=require('../controller/studentController')

const router= express.Router()

//get all workout
router.get('/',getStudents)

//get single workout
router.get('/:id',getStudent)

//POST a new workout
router.post('/', createStudent)

//DELETE a workout
router.delete('/:id',deleteStudent)

//Update a workout
router.patch('/:id',updateStudent)


module.exports=router