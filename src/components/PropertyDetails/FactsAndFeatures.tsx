import Image from "next/image";
import { Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SectionSpacing from "../SectionSpacing";
import { Wifi } from "@mui/icons-material";
import { STRAPI_API } from "../../../config";
import { styled } from "@mui/material/styles";

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
    padding:5px;

`

export default function FactsAndFeatures({details}:{details:any}){
    return(
        <Container id="factsAndFeatures">
            <SectionSpacing/>
            <Title>Facts and Features</Title>
            <Grid container spacing={1}>
                <Grid item lg={8}>
                    <Grid container spacing={4} sx={{border:"1px solid transparent"}}>
                        <Grid item lg={12}>
                        <List sx={{ display:"flex", flexWrap:"wrap", width:"100%"}}>
                            {
                                details?.factsAndFeatures.map((factAndFeature:any,index:number)=>
                                (
                                    <ListItem sx={{width:"33%", marginBottom:"40px"}} key={factAndFeature.id}>
                                        <StyledListItemIcon><Wifi sx={{color:"#F58727"}}/></StyledListItemIcon>
                                        <ListItemText>
                                            <Typography sx={{fontSize:"12px"}}>{factAndFeature.name}</Typography>
                                            <Typography sx={{fontSize:"10px"}}>{factAndFeature.subName}</Typography>
                                        </ListItemText>
                                    </ListItem>
                                ))
                            }
                        </List>
                        </Grid>

                        {/* <Grid item lg={6}>
                            <Image src={STRAPI_API + details?.factsAndFeaturesImg?.data?.attributes?.url} alt="PropertyMap" width={200} height={200} style={{display:"block", width:"100%"}}/>
                        </Grid> */}
                    </Grid>
                </Grid>

            </Grid>

        </Container>
    )
}