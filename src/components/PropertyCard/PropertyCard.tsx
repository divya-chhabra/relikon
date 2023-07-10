import { Card, CardMedia, CardContent, Typography, Box, Divider, CardActions, IconButton, Link} from "@mui/material";
import { ControlPoint, OpenInFull, Place } from "@mui/icons-material";


export default function PropertyCard({data}:{data:any}){
    const { id,attributes } = data;
    // console.log(id, attributes);
    // console.log("ImagePath", attributes?.projectImages?.data?.[0]?.attributes);
    return(
          <Card id={id}>
                        <Link href={`/${attributes.city}/${id}`}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={"https://relikon-strapi.ntb.one" + attributes.projectImages.data?.[0].attributes.url}
                            alt="Property1"
                        />
                        </Link>
                        <CardContent>
                            {/* <Typography sx={{color:"#F58727", paddingY:"5px"}}>For Rent</Typography> */}
                            <Typography sx={{fontWeight:"bold", paddingY:"5px"}}>
                                {attributes?.projectName}
                            </Typography>
                            <Box sx={{display:"flex", paddingY:"5px"}}>
                                <Place sx={{color:"#F58727"}}/>
                                <Typography>{attributes.location}</Typography>
                            </Box>
                            {/* <Box sx={{display:"flex", justifyContent:"space-between", width:"100%", paddingY:"5px"}}>
                                <Typography sx={{fontSize:"12px"}}>3 BedRooms</Typography>
                                <Typography  sx={{fontSize:"12px"}}>2 BedRooms</Typography>
                                <Typography sx={{fontSize:"12px"}}>3450 Sq. Ft.</Typography>
                            </Box> */}
                        </CardContent>
                        <Divider/>
                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <CardActions disableSpacing>
                            <IconButton aria-label="Open in Full" sx={{"&:hover":{color:"#F58727"}}} >
                                <OpenInFull />
                            </IconButton>
                            <IconButton aria-label="Compare" sx={{"&:hover":{color:"#F58727"}}}>
                                <ControlPoint />
                            </IconButton>
                        </CardActions>
                        <Typography color="#F58727" sx={{fontSize:"16px", paddingRight:"10px", fontWeight:"bold"}}>{attributes.price}</Typography>
                        </Box>
            </Card>
                
    )
}