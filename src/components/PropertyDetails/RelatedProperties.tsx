import { Place, ControlPoint, OpenInFull } from "@mui/icons-material";
import SectionSpacing from "../SectionSpacing";
import { Divider, Typography,Container, Grid, Card, CardMedia, CardContent, CardActions, IconButton, Box } from "@mui/material";
import PropertyCard from "../PropertyCard/PropertyCard";
import { styled } from '@mui/material/styles';
const Title = styled(Typography)`
    border-left:2px solid #FF5A3C;
    padding-left:8px;
    margin:50px 0px;
    font-weight:bold;
`

export default function RelatedProperties({details}:{details:any}) {
    return (
        <Container id="relatedProperties">
            <SectionSpacing />
            <section id="section5">
            <Title> Related Properties </Title>
            <Grid container spacing={4}>
                {
                    details?.houses.data.map((house:any)=>(
                        <Grid item lg={4}>
                            <PropertyCard data={house}/>
                        </Grid>
                    ))
                }
                
            </Grid>
            </section>
        </Container>
    )

}