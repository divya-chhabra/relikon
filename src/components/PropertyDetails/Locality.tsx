import { useState, useEffect } from "react";
import { ExpandMore, DirectionsBusFilledOutlined } from "@mui/icons-material";
import { Typography, Container, Grid, Accordion, AccordionSummary, AccordionDetails, Box, Avatar, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Title = styled(Typography)`
    border-left:2px solid #FF5A3C;
    padding-left:8px;
    margin:50px 0px;
    font-weight:bold;
`
export default function Locality({details}:{details:any}) {
    const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    // Add event listener to track scroll position
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Define the scroll amount at which you want to change the position
    const scrollThreshold = 1100;

    const footerHeight = document.getElementById('footer')?.offsetHeight || 0;

    const scrollAmountFromBottom = document.documentElement.scrollHeight - scrollPosition - window.innerHeight - footerHeight-200;

    // Update the state based on the scroll position
    setIsFixed(scrollPosition > scrollThreshold && scrollAmountFromBottom > 0);
  };
    return (
        <Container>
            <section id="section1">
            <Title>Near by Neighbourhood</Title>
            <Grid container spacing={1}>
                <Grid item lg={8} sx={{bgcolor:"#F4F4F8", borderRadius:"10px"}}>
                    {
                       details?.locality?.school && details?.locality?.school.length>0 &&
                        <Box sx={{margin:"30px"}}>
                        <Accordion sx={{ border: "1px solid #F58727", borderRadius:"20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <DirectionsBusFilledOutlined sx={{ color: "#F58727", marginRight: "5px" }} />
                                <Typography sx={{ fontWeight: "bold" }}>Schools</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Box sx={{
                                            width: "100%", borderTop: "3px solid #F58727", paddingTop: "10px", paddingLeft: "20px"
                                        }}>
                                {
                                    details?.locality?.school.map((school:any,index:number)=> (
                                            <Box key={index} sx={{width: "100%", display: "flex",  paddingTop: "10px", justifyContent: "space-between", paddingLeft: "20px"}}>
                                            <Typography >
                                                {school?.name}
                                            </Typography>
                                            <Typography >
                                                { school?.distance}
                                            </Typography>
                                            </Box>
                                        
                                    ))
                                }   
                                </Box>                          
                            </AccordionDetails>
                        </Accordion>
                        </Box>
                    }
                    {
                        details?.locality?.hospital && details?.locality?.hospital.length>0 &&
                        <Box sx={{margin:"30px"}}>
                        <Accordion sx={{ border: "1px solid #F58727", borderRadius:"20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <DirectionsBusFilledOutlined sx={{ color: "#F58727", marginRight: "5px" }} />
                                <Typography sx={{ fontWeight: "bold" }}>Hospitals</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Box sx={{
                                            width: "100%", borderTop: "3px solid #F58727", paddingTop: "10px", paddingLeft: "20px"
                                        }}>
                                {
                                    details?.locality?.hospital.map((hospital:any,index:number)=> (
                                            <Box key={index} sx={{width: "100%", display: "flex",  paddingTop: "10px", justifyContent: "space-between", paddingLeft: "20px"}}>
                                            <Typography >
                                                {hospital?.name}
                                            </Typography>
                                            <Typography >
                                                { hospital?.distance}
                                            </Typography>
                                            </Box>
                                        
                                    ))
                                }   
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        </Box>
                    }
                    {
                        details?.locality?.metro && details?.locality?.metro.length>0 &&
                        <Box sx={{margin:"30px"}}>
                        <Accordion sx={{ border: "1px solid #F58727", borderRadius:"20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <DirectionsBusFilledOutlined sx={{ color: "#F58727", marginRight: "5px" }} />
                                <Typography sx={{ fontWeight: "bold" }}>Metro Stations</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Box sx={{
                                            width: "100%", borderTop: "3px solid #F58727", paddingTop: "10px", paddingLeft: "20px"
                                        }}>
                                {
                                    details?.locality?.metro.map((metro:any,index:number)=> (
                                            <Box key={index} sx={{width: "100%", display: "flex",  paddingTop: "10px", justifyContent: "space-between", paddingLeft: "20px"}}>
                                            <Typography >
                                                {metro?.name}
                                            </Typography>
                                            <Typography >
                                                { metro?.distance}
                                            </Typography>
                                            </Box>
                                        
                                    ))
                                }   
                                </Box>

                            </AccordionDetails>
                        </Accordion>
                        </Box>

                    }
                    {
                        details?.locality?.railway && details?.locality?.railway.length>0 && 
                        <Box sx={{margin:"30px"}}>
                        <Accordion sx={{ border: "1px solid #F58727", borderRadius:"20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <DirectionsBusFilledOutlined sx={{ color: "#F58727", marginRight: "5px" }} />
                                <Typography sx={{ fontWeight: "bold" }}>Train Stations</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                            <Box sx={{
                                            width: "100%", borderTop: "3px solid #F58727", paddingTop: "10px", paddingLeft: "20px"
                                        }}>
                                {
                                    details?.locality?.railway.map((railway:any,index:number)=> (
                                            <Box key={index} sx={{width: "100%", display: "flex",  paddingTop: "10px", justifyContent: "space-between", paddingLeft: "20px"}}>
                                            <Typography >
                                                {railway?.name}
                                            </Typography>
                                            <Typography >
                                                { railway?.distance}
                                            </Typography>
                                            </Box>
                                        
                                    ))
                                }   
                                </Box>

                            </AccordionDetails>
                        </Accordion>
                        </Box>

                    }
                    {
                        details?.locality?.mall && details?.locality?.mall.length>0 && 
                        <Box sx={{margin:"30px"}}>
                        <Accordion sx={{ border: "1px solid #F58727", borderRadius:"20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <DirectionsBusFilledOutlined sx={{ color: "#F58727", marginRight: "5px" }} />
                                <Typography sx={{ fontWeight: "bold" }}>Malls</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                            <Box sx={{
                                            width: "100%", borderTop: "3px solid #F58727", paddingTop: "10px", paddingLeft: "20px"
                                        }}>
                                {
                                    details?.locality?.mall.map((mall:any,index:number)=> (
                                            <Box key={index} sx={{width: "100%", display: "flex",  paddingTop: "10px", justifyContent: "space-between", paddingLeft: "20px"}}>
                                            <Typography >
                                                {mall?.name}
                                            </Typography>
                                            <Typography >
                                                { mall?.distance}
                                            </Typography>
                                            </Box>
                                        
                                    ))
                                }   
                                </Box>

                            </AccordionDetails>
                        </Accordion>
                        </Box>

                    }

                    {
                        details?.locality?.airport && details?.locality?.airport.length>0 && 
                        <Box sx={{margin:"30px"}}>
                        <Accordion sx={{ border: "1px solid #F58727", borderRadius:"20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <DirectionsBusFilledOutlined sx={{ color: "#F58727", marginRight: "5px" }} />
                                <Typography sx={{ fontWeight: "bold" }}>Airports</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                            <Box sx={{
                                            width: "100%", borderTop: "3px solid #F58727", paddingTop: "10px", paddingLeft: "20px"
                                        }}>
                                {
                                    details?.locality?.airport.map((airport:any,index:number)=> (
                                            <Box key={index} sx={{width: "100%", display: "flex",  paddingTop: "10px", justifyContent: "space-between", paddingLeft: "20px"}}>
                                            <Typography >
                                                {airport?.name}
                                            </Typography>
                                            <Typography >
                                                { airport?.distance}
                                            </Typography>
                                            </Box>
                                        
                                    ))
                                }   
                                </Box>

                            </AccordionDetails>
                        </Accordion>
                        </Box>
                    }

                    {
                        details?.locality?.roads && details?.locality?.roads.length>0 && 
                        <Box sx={{margin:"30px"}}>
                        <Accordion sx={{ border: "1px solid #F58727", borderRadius:"20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <DirectionsBusFilledOutlined sx={{ color: "#F58727", marginRight: "5px" }} />
                                <Typography sx={{ fontWeight: "bold" }}>Roads</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                            <Box sx={{
                                            width: "100%", borderTop: "3px solid #F58727", paddingTop: "10px", paddingLeft: "20px"
                                        }}>
                                {
                                    details?.locality?.roads.map((road:any,index:number)=> (
                                            <Box key={index} sx={{width: "100%", display: "flex",  paddingTop: "10px", justifyContent: "space-between", paddingLeft: "20px"}}>
                                            <Typography >
                                                {road?.name}
                                            </Typography>
                                            <Typography >
                                                { road?.distance}
                                            </Typography>
                                            </Box>
                                        
                                    ))
                                }   
                                </Box>

                            </AccordionDetails>
                        </Accordion>
                        </Box>
                    }

                    {
                        details?.locality?.sports && details?.locality?.sports.length>0 && 
                        <Box sx={{margin:"30px"}}>
                        <Accordion sx={{ border: "1px solid #F58727", borderRadius:"20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <DirectionsBusFilledOutlined sx={{ color: "#F58727", marginRight: "5px" }} />
                                <Typography sx={{ fontWeight: "bold" }}>Sports</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                            <Box sx={{
                                            width: "100%", borderTop: "3px solid #F58727", paddingTop: "10px", paddingLeft: "20px"
                                        }}>
                                {
                                    details?.locality?.sports.map((sport:any,index:number)=> (
                                            <Box key={index} sx={{width: "100%", display: "flex",  paddingTop: "10px", justifyContent: "space-between", paddingLeft: "20px"}}>
                                            <Typography >
                                                {sport?.name}
                                            </Typography>
                                            <Typography >
                                                { sport?.distance}
                                            </Typography>
                                            </Box>
                                        
                                    ))
                                }   
                                </Box>

                            </AccordionDetails>
                        </Accordion>
                        </Box>
                    }

                    {
                        details?.locality?.resorts && details?.locality?.resorts.length>0 && 
                        <Box sx={{margin:"30px"}}>
                        <Accordion sx={{ border: "1px solid #F58727", borderRadius:"20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <DirectionsBusFilledOutlined sx={{ color: "#F58727", marginRight: "5px" }} />
                                <Typography sx={{ fontWeight: "bold" }}>Resorts</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                            <Box sx={{
                                            width: "100%", borderTop: "3px solid #F58727", paddingTop: "10px", paddingLeft: "20px"
                                        }}>
                                {
                                    details?.locality?.resorts.map((resort:any,index:number)=> (
                                            <Box key={index} sx={{width: "100%", display: "flex",  paddingTop: "10px", justifyContent: "space-between", paddingLeft: "20px"}}>
                                            <Typography >
                                                {resort?.name}
                                            </Typography>
                                            <Typography >
                                                { resort?.distance}
                                            </Typography>
                                            </Box>
                                        
                                    ))
                                }   
                                </Box>

                            </AccordionDetails>
                        </Accordion>
                        </Box>
                    }
                    {
                        details?.locality?.others && details?.locality?.others.length>0 && 
                        <Box sx={{margin:"30px"}}>
                        <Accordion sx={{ border: "1px solid #F58727", borderRadius:"20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <DirectionsBusFilledOutlined sx={{ color: "#F58727", marginRight: "5px" }} />
                                <Typography sx={{ fontWeight: "bold" }}>Others</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                            <Box sx={{
                                            width: "100%", borderTop: "3px solid #F58727", paddingTop: "10px", paddingLeft: "20px"
                                        }}>
                                {
                                    details?.locality?.others.map((other:any,index:number)=> (
                                            <Box key={index} sx={{width: "100%", display: "flex",  paddingTop: "10px", justifyContent: "space-between", paddingLeft: "20px"}}>
                                            <Typography >
                                                {other?.name}
                                            </Typography>
                                            <Typography >
                                                { other?.distance}
                                            </Typography>
                                            </Box>
                                        
                                    ))
                                }   
                                </Box>

                            </AccordionDetails>
                        </Accordion>
                        </Box>
                    }
                    
                    
                </Grid>
                <Grid item lg={4}>
                    <Box id="contact" sx={isFixed?{position:'fixed',top:100,width:'300px',padding:"15px", border:"1px solid #FF5A3C", marginX:"30px", borderRadius:"5px"}
                                        :{position:"static",padding:"15px", border:"1px solid #FF5A3C", marginX:"30px", borderRadius:"5px"}}>
                        <Typography sx={{fontWeight:"bold", textAlign:"center", padding:"10px"}}>Interested? Enquire Now</Typography>
                        <Box sx={{bgcolor:"#FEF2E7", width:"100%", display:"flex", padding:"10px"}}>
                                <Avatar />
                                <Typography sx={{fontWeight:"bold", fontSize:"14px", paddingLeft:"10px"}}>
                                    {details?.projectName}
                                </Typography>
                        </Box>

                        <TextField type="text" name="enquiryName" placeholder="Name" variant="standard" sx={{padding:"10px"}}fullWidth />
                        <TextField type="number" name="enquiryPhone" placeholder="Phone" variant="standard" fullWidth sx={{padding:"10px"}} />
                        <TextField type="email" name="enquiryEmail" placeholder="Email" variant="standard" fullWidth sx={{padding:"10px"}}/>
                        <Button variant="contained" fullWidth sx={{padding:"10px",bgcolor:"#F58727", marginY:"10px", 
                            "&:hover":{bgcolor:"#F58727"} }}>Get Contact Details</Button>
                    </Box>
                </Grid>
            </Grid>
            </section>
        </Container>
    )
}