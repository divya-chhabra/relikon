import Image from "next/image";
import { Grid, Box, Typography, Container, Button, TextField, IconButton, InputAdornment, ListItem} from "@mui/material";
import { styled } from '@mui/material/styles';
import { PersonOutlineRounded , Search } from '@mui/icons-material';

export default function HeaderWithSearch({searchTerm,handleSearchTerm, filterData, propertiesData}:{searchTerm:string, handleSearchTerm:Function, filterData:Function, propertiesData:any}){
    return(
        <Container>
            <Grid container spacing={2} sx={{mt:1}}>
                <Grid item lg={3} sx={{}}>
                    <Box sx={{ display: "flex"}}>
                        <Image src="/assets/logo/RelikonPropertiesLogo.png" alt="Relikon - Property Information Website"
                            width={76} height={76}></Image>
                    </Box>
                </Grid>

                <Grid item lg={6}>
                        <TextField value={searchTerm} onChange={(e)=>handleSearchTerm(e.target.value)}
                                    size="small" type="text" placeholder="Enter locality, Property or Developer" fullWidth
                                    sx={{ bgcolor:"#eee", "& fieldset":{border:"none"} }} InputProps={{
                            endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton sx={{borderRadius:0, padding:"16px 0px"}} onClick={()=> filterData(searchTerm)}>
                                                <Search/>
                                            </IconButton>
                                        </InputAdornment>
                                    }} />
                        {
                            searchTerm && <Box>
                                {
                                    propertiesData.filter((property:any) => {
                                        return property.attributes.projectName.toLowerCase().startsWith(searchTerm.toLowerCase()) && property.attributes.projectName!=searchTerm;
                                    }).map((res:any)=> <ListItem onClick={()=>handleSearchTerm(res.attributes.projectName)} key={res.id}>{res.attributes.projectName}</ListItem>)
                                    
                                }
                                
                            </Box>
                        }

                </Grid>
                <Grid item lg={3} sx={{display:"flex"}}>

                    <Typography variant="h6">Advertise</Typography>
                    <Button variant="contained" sx={{bgcolor:"#FF5A3C", height:"30px", borderRadius:"20px", marginLeft:"10px", paddingX:"30px", textTransform:"uppercase"}}>
                        <PersonOutlineRounded/>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}