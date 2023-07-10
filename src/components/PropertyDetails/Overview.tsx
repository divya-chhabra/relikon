import { Container, Typography, Box, Grid} from "@mui/material";
import { Place } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import SectionSpacing from "../SectionSpacing";

const Title = styled(Typography)`
    border-left:2px solid #FF5A3C;
    padding-left:8px;
    margin:20px 0px;
    font-weight:bold;
`

export default function Overview({details}:{details:any}){
    return (
        <Container>
            <section id="section2">
            <SectionSpacing/>
            <Grid container spacing={1}>
                <Grid item lg={8}>
                <Typography variant="h4">{details.projectName}</Typography>
                <Box sx={{display:"flex", paddingY:"5px"}}>
                                <Place sx={{color:"#F58727"}}/>
                                <Typography>{details.location}</Typography>
                </Box>
                <Title>Description</Title>
                <Typography sx={{paddingY:"10px"}}>
                    {details.description}
                </Typography>
                
                </Grid>
            </Grid>
            </section>
        </Container>
    )
}