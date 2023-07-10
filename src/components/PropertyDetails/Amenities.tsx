import { Container, Typography, Box, List, ListItem, ListItemText, ListItemIcon, Grid, Avatar} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Wifi } from "@mui/icons-material";
import SectionSpacing from "../SectionSpacing";
import { STRAPI_API } from "../../../config";

const Title = styled(Typography)`
    border-left:2px solid #FF5A3C;
    padding-left:8px;
    margin-bottom:20px;
    font-weight:bold;
`
const StyledListItemIcon = styled(ListItemIcon)`
    background-color:#fef2e7; 
    min-width:0px;
    margin-right:10px;

`
export default function Amenities({details}:{details:any}){
    return(
        <Container id="amenities">
            <SectionSpacing/>
            <section id="section3">
            <Title>Amenities</Title>
            <Grid container spacing={1}>
                <Grid item lg={8}>
                    <List sx={{ display:"flex", flexWrap:"wrap",}}>
                    {
                        details?.amenities.map((amenity:any, index:number) => (
                        <ListItem sx={{width:"33%"}} key={amenity.id}>
                            <StyledListItemIcon>
                                <Avatar src={STRAPI_API + amenity?.img?.data?.attributes?.url} alt="Card Room" />
                                {/* <Wifi sx={{color:"#F58727"}}/> */}
                            </StyledListItemIcon>
                            <ListItemText>{amenity.name}</ListItemText>
                        </ListItem>
                        )
                     )
                    }
                    </List>
                </Grid>
                <Grid item lg={4}>
                    
                </Grid>

            </Grid>
            </section>

        </Container>
    )
}