import { useState } from "react";
import Image from "next/image"; 
import { Grid, Typography, Box, Container, Select, Link, MenuItem } from "@mui/material";
import SectionSpacing from "../SectionSpacing";
import { STRAPI_API } from "../../../config";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function TopHeader({details}:{details:any}){
    const [carpetAreaUnit, setCarpetAreaUnit] = useState("sqFt");
    return(
        <Container>
        <Grid container spacing={1}>
            <Grid item lg={6}>
                <Typography variant="h4">
                    {details?.projectName}
                </Typography>
                <Typography variant="h5">
                    by <Box sx={{display:"inline-block", color:"#F58727"}}>{details?.builderName}</Box>
                </Typography>
                <Typography variant="h5">
                    {details?.location}
                </Typography>
            </Grid>
            <Grid item lg={6} sx={{textAlign:"right"}}>
                <Typography variant="h4" color="#F58727">
                    Rs {details?.price}
                </Typography>
                <Typography variant="h5">
                    Onwards
                </Typography>
            </Grid>
        </Grid>
        <SectionSpacing/>
        <Grid container sx={{boxShadow:"0 0 35px 0 rgba(0,0,0,.25);"}}>
            <Grid item lg={6}>
                <Carousel showStatus={false} showThumbs={false}>
                    {
                        details?.projectImages?.data?.map((data1:any)=>(
                            <Box>
                                 <Image src={STRAPI_API + data1.attributes.url} alt="Image 1" width={700} height={450} style={{width:'auto'}} />
                            </Box>
                        ))
                    }
                </Carousel>
            </Grid>
            <Grid item lg={6}>
            <Grid container alignItems={"center"} sx={{borderBottom:"2px solid #F58727", padding:"20px", width:"80%", margin:"0 auto"}}>
                        <Grid item lg={6}sx={{padding:"20px 15px"}}>
                            <Typography sx={{fontSize:"12px"}}>Configurations</Typography>
                            <Typography sx={{fontWeight:"bold"}}>{details?.rooms}</Typography>
                        </Grid>
                        <Grid item lg={6} sx={{padding:"20px 15px"}}>
                            <Typography sx={{fontSize:"12px"}}>Possession Date</Typography>
                            <Typography sx={{fontWeight:"bold"}}>{details?.possessionDate}</Typography>
                        </Grid>

                    </Grid>

                    <Grid container alignItems={"center"} sx={{borderBottom:"2px solid #F58727", padding:"20px", width:"80%", margin:"0 auto"}}>
                        <Grid item lg={6}sx={{paddingY:"20px", paddingLeft:"10px"}}>
                            <Typography sx={{fontSize:"12px"}}>Rera Approved</Typography>
                            <Typography sx={{fontWeight:"bold"}}>{details?.reraApproved?"Yes":"No"}</Typography>
                        </Grid>
                        <Grid item lg={6} sx={{paddingY:"20px", paddingLeft:"10px"}}>
                            <Typography sx={{fontSize:"12px"}}> Carpet Area</Typography>
                            <Grid container alignItems={"center"}>
                                <Grid item lg={6}>
                                <Typography sx={{fontWeight:"bold"}}>
                                    {
                                        // (details?.carpetArea?.sqFt)
                                        (carpetAreaUnit==="sqFt"? details?.carpetArea?.sqFt : (carpetAreaUnit==="sqYard"? details?.carpetArea?.sqYard:
                                        (carpetAreaUnit==="sqMtr"? details?.carpetArea?.sqMtr:
                                        (carpetAreaUnit==="acres"? details?.carpetArea?.acres:" ")))
                                        )
                                    }
                                </Typography>
                                </Grid>
                                <Grid item lg={6}>
                                <Select variant="standard" disableUnderline value={carpetAreaUnit}  
                                MenuProps={{
                                            anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "right"
                                            },
                                            PaperProps: {
                                                sx: {
                                                  boxShadow:0,
                                                  left:"10 px"
                                                },
                                              },
                                        }} 
                                        defaultValue={"sqFt"} sx={{fontWeight:"bold"}}
                                        
                                onChange={(e: any)=> setCarpetAreaUnit(e.target.value)}>
                                    <MenuItem value={"sqFt"}>Sq Ft</MenuItem>
                                    <MenuItem value={"sqYard"}>Sq Yrd</MenuItem>
                                    <MenuItem value={"sqMtr"}>Sq Mtr</MenuItem>
                                    <MenuItem value={"acres"}>Acres</MenuItem>
                                </Select>
                                </Grid>
                            </Grid>
                            
                        </Grid>

                    </Grid>
                    <Box sx={{textAlign:"center", mb:3}}>
                        <Link href="#contact"sx={{display:"inline-block",bgcolor:"#F58727", mt:"75px", mx:"auto", padding:"15px 80px", color:"#fff", textDecoration:"none" }}>Contact Seller</Link>
                    </Box>
                
            </Grid>
        </Grid>
        </Container>
        
    )
}