export default Appbar
import { Button, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
function Appbar (){
    const[userEmail,setUserEmail] = useState(null)
    const navigate = useNavigate()
    async function init (){
        const response = await axios.get("http://localhost:3000/admin/me" , {
            headers : {
                "authorisation" : "Bearer " + localStorage.getItem("token")
            }
        } )
        if (response.data.username){
            setUserEmail(response.data.username)
        }
    }
    
    useEffect(()=>{
        init()
    },[])

    if(userEmail){
        return <div style = {{
            paddingRight : 5,
            paddingLeft : 5,
            paddingTop : 5,
            display : "flex",
            justifyContent : "space-between"
        }}>
            <div>
            <Typography variant="h5" style={{
                color : "blue"
            }}><b>Coursera</b></Typography></div>

            <div>
                <div style={{
                    display : "flex",
                }}>
                    <div style={{
                        paddingRight : 5
                    }}>
                    <Avatar>{userEmail.split("")[0]}</Avatar>
                    </div>
                    <Button variant="contained" onClick={() => {
                        localStorage.setItem("token" , null)
                        window.location.assign("/")
                    }}>Logout</Button>
                </div>
            </div>
        </div>
       
    }
    else {
        return <div style = {{
            paddingRight : 5,
            paddingLeft : 5,
            paddingTop : 5,
            display : "flex",
            justifyContent : "space-between"
        }}>
            <div>
            <Typography variant="h5" style={{
                color : "blue"
            }}><b>Coursera</b></Typography></div>
        
            <div>
                <div style={{
                    display : "flex",
                }}>
                    <div style={{
                        paddingRight : 5
                    }}>
                    <Button variant="contained" onClick={() => navigate("/signup")}>Signup</Button>
                    </div>
                    <Button variant="contained" onClick={() => navigate("/signin")}>SignIn</Button>
                </div>
            </div>
        </div>
    }
}

