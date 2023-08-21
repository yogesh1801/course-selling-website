const mongoose = require("mongoose")
const {Schema , model} = mongoose

const AdminSchema = new Schema ({
    username : {type :String},
    password : {type :String}
})

const UserSchema = new Schema ( {
    username : {type : String},
    password : {type : String},
    purchasedCourses : [{type : Schema.Types.ObjectId , ref : "Course"}]

})

const CourseSchema = new Schema ( {
    title : String,
    description : String,
    price : Number,
    imageLink : String,
    published : Boolean
})

// Above we have defined Schemas and also purshaced courses is a reference to other model in the Collections

const Admin = model("Admin" , AdminSchema)
const User = model ("User" , UserSchema)
const Course = model ("Course" , CourseSchema)

module.exports = {
    Admin , User , Course
}
