import { Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SectionSpacing from "../SectionSpacing";
import { East } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Title = styled(Typography)`
    border-left:2px solid #FF5A3C;
    padding-left:8px;
    margin-bottom:20px;
    font-weight:bold;
`

const StyledListItemIcon = styled(ListItemIcon)`
    min-width:0px;
    margin-right:10px;
    color:#000;
    font-size:"small";

`

export default function ProjectHighlights({details}:{details:any}){
    return(
        <Container id="projectHighlights">
            <SectionSpacing/>
            <section id="section4">
            <Title>Project Highlights</Title>
            <Grid container spacing={1}>
                <Grid item lg={8}>
                    <Grid container spacing={1}>
                        <Grid item lg={12}>
                        <List>
                            {
                                details?.projectHighlights.map((projectHighlight:any, index:number)=> (
                                <ListItem key={projectHighlight.id}>
                                        <StyledListItemIcon><East sx={{fontSize:"15px", color:"#F58727"}}/></StyledListItemIcon>
                                        <ListItemText>{projectHighlight.name}</ListItemText>
                                </ListItem>
                                ))
                            }
                            
                        </List>
                        </Grid>
                        <Grid item lg={12}>
                            <iframe src={details?.mapLocation} width="100%" height="350px"></iframe>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item lg={4}>

                </Grid>
            </Grid>
            </section>
        </Container>
    )
}