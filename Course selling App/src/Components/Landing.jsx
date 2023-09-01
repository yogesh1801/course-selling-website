export default Landing
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
function Landing () {
    return <div style={{
        paddingTop : 50
    }}>
        <Grid container style={{padding : "5vw"}}>
            <Grid item xs = {12} md = {6} lg = {6}>
                <div style={{
                    paddingTop : 100
                }}>
                    <Typography variant='h3'>
                    Coursera Admin
                    </Typography>
                    <Typography variant='h6'>
                    A place to learn, grow and earn
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{marginTop: 20}}>
                <img src='https://s35691.pcdn.co/wp-content/uploads/2017/07/iStock-528978494-170719.jpg'  width={"100%"}  />

            </Grid>

        </Grid>
    </div>
}