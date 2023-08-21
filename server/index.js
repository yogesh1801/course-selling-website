const express = require("express")
const app = express()
const PORT = 3000
const adminRoutes = require("./routes/adminRoutes")
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/admin" , adminRoutes)

app.listen(PORT , () => {
    console.log("App is listening on " + PORT)
})

mongoose.connect("mongodb+srv://yogeshlearner07:5TH6GqgBSN5O554a@cluster0.zrecktt.mongodb.net/courses")