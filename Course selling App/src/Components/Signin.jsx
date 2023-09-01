export default Signin
import Card from '@mui/material/Card';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signin () {
    const [username , setUsername] = useState(null)
    const [password , setPassword] = useState(null)
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
                }}/>
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
                <Button variant="contained" onClick={async () => {
                    const response = axios.post("http://localhost:3000/admin/login" , {
                        username , password
                    }, {
                        headers : {
                            "Content-Type" : "application/json"
                        }
                    })
                    if ((await response).data.token){
                        localStorage.setItem("token" , (await response).data.token)
                        window.location = "/courses"
                    }
                    else {
                        navigate("/signin")
                    }
                }}>Signin</Button>
            </div>
        </div>
    </Card>
    </div>
}