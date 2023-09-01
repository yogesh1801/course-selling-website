import { useEffect, useState } from "react"
import axios from "axios"
import  Card  from "@mui/material/Card";
import  Typography  from "@mui/material/Typography";
import  Button  from "@mui/material/Button";
export default Courses

function Courses () {
    const[Courses , SetCourses] = useState([]);
    async function getCourses (){
        const response = await axios.get("http://localhost:3000/admin/courses" , {
            headers : {
                "content-Type" : "application/json",
                "authorisation" : "Bearer " + localStorage.getItem("token")
            }
        })
        if (response){
            const courses = response.data.courses
            console.log(courses)
            SetCourses(courses)
        }
    }
    useEffect(() => {
        getCourses()
    },[])

    return <div style={{
        display : "flex",
        justifyContent : "center",
        flexWrap : "wrap",
    }}>
        {Courses.map((ele) => {
            return <div id = {ele._id}>
                <Card style = {{
                    margin: 10,
                    width: 300,
                    minHeight: 200,
                    padding: 20,
                }}>
                    <div>
                        <Typography textAlign={"center"} variant="h5">{ele.title}</Typography>
                        <img src={ele.imageLink} style={{width: 300 , height :200}} ></img>
                        <Typography textAlign={"center"} variant="subtitle1">{ele.description}</Typography>
                        <div style={{
                            display : "flex",
                            justifyContent : "center"
                        }}>
                        <Button variant="contained">Edit</Button>
                        </div>
                        
                    </div>
                </Card>
            </div>
        })}
    </div>
}