import { Box, Container, Grid, Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import { FacebookRounded } from "@mui/icons-material";
export default function BottomFooter(){
    return(
        <Box sx={{backgroundColor:"#313441", color:"#fff"}}>
        <Container>
            <Grid container spacing={1}>
                <Grid item md={3}>
                    <Typography>About Us</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quam accusamus corporis ipsam doloribus ullam. Harum corrupti, 
                        iure ipsa veritatis fugiat libero. Expedita, id commodi incidunt 
                        fuga at delectus architecto aliquid.
                    </Typography>
                </Grid>
                <Grid item md={3}>
                    <Typography>Useful Links</Typography>
                    <List>
                        <ListItem>
                            <ListItemText>
                                <Link href="#" color="#fff">Home</Link>
                            </ListItemText>
                        </ListItem>

                        <ListItem>
                            <ListItemText>
                                <Link href="#" color="#fff">About us</Link>
                            </ListItemText>
                        </ListItem>

                        <ListItem>
                            <ListItemText>
                                <Link href="#" color="#fff">Privacy Policy</Link>
                            </ListItemText>
                        </ListItem>

                        <ListItem>
                            <ListItemText>
                                <Link href="#" color="#fff">Terms and Conditions</Link>
                            </ListItemText>
                        </ListItem>
                    </List>

                </Grid>
                <Grid item md={3}>
                    <Typography>Useful Links</Typography>
                    <List>
                        <ListItem>
                            <ListItemText>
                                <Link href="#" color="#fff">Home</Link>
                            </ListItemText>
                        </ListItem>

                        <ListItem>
                            <ListItemText>
                                <Link href="#" color="#fff">About us</Link>
                            </ListItemText>
                        </ListItem>

                        <ListItem>
                            <ListItemText>
                                <Link href="#" color="#fff">Privacy Policy</Link>
                            </ListItemText>
                        </ListItem>

                        <ListItem>
                            <ListItemText>
                                <Link href="#" color="#fff">Terms and Conditions</Link>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item md={3}>
                    <Typography>Relikon</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quam accusamus corporis ipsam doloribus ullam. Harum corrupti, 
                        iure ipsa veritatis fugiat libero. Expedita, id commodi incidunt 
                        fuga at delectus architecto aliquid.
                    </Typography>
                </Grid>
                <Grid container spacing={3}>
                    
                <Grid item lg={3}>
                <List sx={{display:"flex"}}>
                        <ListItem>
                           <FacebookRounded/>
                        </ListItem>
                        <ListItem>
                           <FacebookRounded/>
                        </ListItem>
                        <ListItem>
                           <FacebookRounded/>
                        </ListItem>
                        <ListItem>
                           <FacebookRounded/>
                        </ListItem>
                </List>
                </Grid>
                    

                    <Grid item lg={4}></Grid>

                    <Grid item lg={4}></Grid>
                    
                </Grid>
                <Grid container spacing={6}>
                    <Grid item lg={3}>
                        <Typography>
                             &#169; Relikon 2021 All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item lg={6}>
                        
                    </Grid>
                    <Grid item lg={3}>
                             <Link href="#" color="#ccc">Terms of Use</Link>
                                |
                            <Link href="#" color="#ccc">Privacy Policy</Link>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        </Box>

    )
}