const express=require('express')
const Workout=require('../models/Teacher')
const {
    getTeacher,
    getTeachers,
    createTeacher,
    deleteTeacher,
    updateTeacher
}=require('../controller/teacherController')

const router= express.Router()

//get all workout
router.get('/',getTeachers)

//get single workout
router.get('/:id',getTeacher)

//POST a new workout
router.post('/', createTeacher)

//DELETE a workout
router.delete('/:id',deleteTeacher)

//Update a workout
router.patch('/:id',updateTeacher)


module.exports=router