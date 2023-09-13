const express=require('express')
const Workout=require('../models/Checker')
const {
    getChecker,
    getCheckers,
    createChecker,
    deleteChecker,
    updateChecker
}=require('../controller/checkerController')

const router= express.Router()

//get all workout
router.get('/',getCheckers)

//get single workout
router.get('/:id',getChecker)

//POST a new workout
router.post('/', createChecker)

//DELETE a workout
router.delete('/:id',deleteChecker)

//Update a workout
router.patch('/:id',updateChecker)


module.exports=router