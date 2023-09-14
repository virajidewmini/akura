const express=require('express')
const Checkin=require('../models/Checkin')
const {
    getCheckin,
    getCheckins,
    createCheckin,
    deleteCheckin,
    updateCheckin
}=require('../controller/checkinController')

const router= express.Router()

//get all workout
router.get('/',getCheckin)

//get single workout
router.get('/:id',getCheckins)

//POST a new workout
router.post('/', createCheckin)

//DELETE a workout
router.delete('/:id',deleteCheckin)

//Update a workout
router.patch('/:id',updateCheckin)


module.exports=router