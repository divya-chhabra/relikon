import Image from "next/image";
import { Grid, Box, Typography, Container, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { PersonOutlineRounded } from '@mui/icons-material';


export default function Header() {
    return (
        <Container>
            <Grid container spacing={2} sx={{mt:1}}>
                <Grid item md={2} lg={2} sx={{}}>
                    <Box sx={{ display: "flex"}}>
                        <Image src="/assets/logo/RelikonPropertiesLogo.png" alt="Relikon - Property Information Website"
                            width={76} height={76}></Image>
                    </Box>
                </Grid>

                <Grid item md={8} lg={8}>

                </Grid>
                <Grid item  md={2} lg={2} sx={{display:"flex"}}>

                    <Typography variant="h6">Advertise</Typography>
                    <Button variant="contained" sx={{bgcolor:"#F58727", height:"30px", borderRadius:"20px", marginLeft:"10px", paddingX:"50px", textTransform:"uppercase", "&:hover":{bgcolor:"#F58727"}}}>
                        <PersonOutlineRounded/>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}