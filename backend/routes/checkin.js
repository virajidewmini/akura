const express=require('express')
const Checkin=require('../models/Checkin')
const {
    getClass,
    getClasses,
    createClass,
    deleteClass,
    updateClass
}=require('../controller/classController')

const router= express.Router()

//get all workout
router.get('/',getClass)

//get single workout
router.get('/:id',getClasses)

//POST a new workout
router.post('/', createClass)

//DELETE a workout
router.delete('/:id',deleteClass)

//Update a workout
router.patch('/:id',updateClass)


module.exports=router