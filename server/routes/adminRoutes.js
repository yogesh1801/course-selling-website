const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const {Admin , User , Course} = require("../db/schema")
const jwt = require ("jsonwebtoken")
const { SECRET, jwtAuth } = require("../middlewares/middleware")

router.post("/signup" , async (req , res) => {
    let {username , password} = req.body
    let check = await Admin.findOne({username , password})
    if (check){
        res.json({"message" : "Admin Already Exsists Please Signin"})
    } else {
        const authData = new Admin({username , password})
        authData.save();
        res.json({"message" : "Admin created successfully"})
    }
})

router.post("/login" , async (req , res) => {
    let {username , password} = req.body
    let check = await Admin.findOne({username , password})
    if(check){
        let token = jwt.sign({username , password} , SECRET , {expiresIn : "1h"})
        res.json({"message" : "user logged in successfully" , token})
    }else {
        res.json({"message" : "No such admin exsists"})
    }
})

router.get("/me" ,jwtAuth, async (req,res) => {
    const admin = await Admin.findOne({username : req.user.username})
    if (admin){
        res.json({"username" : admin.username})
    }else {
        res.status(403).json({"message" : "Admin does not exsists"})
    }
})

router.post("/course" ,jwtAuth, async(req,res) => {
    const course = new Course(req.body)
    await course.save()
    res.json({"message" : "course created successfully" , "course_id" : course._id})
})

router.put("/course/:courseId" ,jwtAuth, async(req,res) => {
    let course = await Course.findByIdAndUpdate(req.params.courseId , req.body , {new : true}) // new : true returns new document
    if (course){
        res.json({"message" : "course updated successfully"})
    } else {
        res.json({"message" : "course with such id not found"})
    }
})

router.get("/courses" , jwtAuth, async(req,res) => {
    let courses = await Course.find({})
    res.json({courses})
})

router.get("/course/:courseId" , jwtAuth , async(req,res) => {
    let course = await Course.findById(req.params.courseId)
    if(course){
        res.json({course})
    } else {
        res.json({"message" : "Course not found"})
    }
})

module.exports = router