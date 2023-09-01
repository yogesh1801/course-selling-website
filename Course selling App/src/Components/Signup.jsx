export default Signup
import Card from '@mui/material/Card';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup () {

    const[username , setUsername] = useState("")
    const[password , setPassword] = useState("")
    const navigate = useNavigate()

    return <div style={{
        paddingTop : 150,
        display : "flex",
        justifyContent : "center"
}}>
    <Card>
        <div style={{
            padding : 10
        }}>
            <div>
                <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e) => {
                    setUsername(e.target.value)
                }} />
            </div>
            <br />
            <div>
                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' onChange={(e) => {
                    setPassword(e.target.value)
                }} />
            </div>
            <br />
            <div style  = {{
                display : "flex",
                justifyContent : "center"
            }}>
                <Button variant="contained" onClick={async() => {
                    const response = await axios.post("http://localhost:3000/admin/signup" , {
                        username,password
                    })
                    if (response){
                        navigate("/signin")
                    }
                    else {
                        navigate("/signup")
                    }
                }}>Signup</Button>
            </div>
        </div>
    </Card>
    </div>
}