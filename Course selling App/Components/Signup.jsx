export default Signup
import Card from '@mui/material/Card';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function Signup () {
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
                <TextField id="outlined-basic" label="Username" variant="outlined" />
            </div>
            <br />
            <div>
                <TextField id="outlined-basic" label="Password" variant="outlined" />
            </div>
            <br />
            <div style  = {{
                display : "flex",
                justifyContent : "center"
            }}>
                <Button variant="contained">Signup</Button>
            </div>
        </div>
    </Card>
    </div>
}