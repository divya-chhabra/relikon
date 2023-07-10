import { useState } from "react";
import { Container, Grid, Button, Typography, Box, Slider, Radio, FormControl, RadioGroup, Select, Checkbox, SelectChangeEvent, FormControlLabel, InputLabel, ListItemText, MenuItem, OutlinedInput, Collapse, IconButton, IconButtonProps,FormGroup, FormLabel} from "@mui/material";
import PropertyCard from "../PropertyCard/PropertyCard";
import SectionSpacing from "@/components/SectionSpacing";
import { ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
const marks = [
    {
      value: 0,
      label: '50 L',
    },
    {
      value: 25,
      label: '1 Cr',
    },
    {
      value: 50,
      label: '2 Cr',
    },
    {
      value: 75,
      label: '3 Cr',
    },
    {
        value: 100,
        label: '4 Cr',
      },
  ];
  
  function valuetext(value: number) {
    return `${value} Cr`;
  }

export default function PropertyListings (props: any) {
        
        console.log(props.propertiesData);
        const {propertiesData, setPropertiesData} = props;

        const [newLaunch, setNewLaunch] = useState(false);
        const [underConstruction, setUnderConstruction] = useState(false);
        const [ shop, setShop] = useState(false);
        const [ office, setOffice] = useState(false);
        const [ plot, setPlot] = useState(false);
        const [scoPlots, setScoPlots] = useState(false);
       
        const [value, setValue] = useState('yes');

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setValue((event.target as HTMLInputElement).value);
        };

        interface ExpandMoreProps extends IconButtonProps {
            expand: boolean;
          }
          
          const ExpandMoreButton = styled((props: ExpandMoreProps) => {
            const { expand, ...other } = props;
            return <IconButton {...other} />;
          })(({ theme, expand }) => ({
            transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest,
            }),
          }));

        const [expanded, setExpanded] = useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
        };

        const [state, setState] = useState({
            Godrej: true,
            DLF:false,
            M3M:false,
            BPTP:false,
            Lodha:false,
            Bhutani:false
          });
        
          const handleBuilderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setState({
              ...state,
              [event.target.name]: event.target.checked,
            });
          };
        
          const { Godrej,DLF,M3M,BPTP,Lodha,Bhutani} = state;
          const error = [Godrej,DLF,M3M,BPTP,Lodha,Bhutani].filter((v) => v).length !== 2;

          // Filter Functions

          const handlePropertiesByPropertyStatus = (propertyStatus:string) => {
                console.log(propertyStatus);
                setPropertiesData(propertiesData.filter( (property:any) => property.attributes.propertyStat.toLowerCase()===propertyStatus.toLowerCase()));
                                   
          }

          const handlePropertiesByPropertyType = (propertyType:string) => {
            console.log(propertyType);
            setPropertiesData(propertiesData.filter( (property:any) => property.attributes.propertyType.toLowerCase()===propertyType.toLowerCase()));
          }
            
             

    return(
        <Container>
            <SectionSpacing/>
            <Grid container spacing={1}>
                <Grid item lg={3}>
                    <Typography sx={{fontWeight:"bold"}} >
                        Properties List
                    </Typography>
                </Grid>
                <Grid item lg={9} >
                   <Grid container spacing={1}>
                        <Grid item>
                            <Button variant="outlined" color="warning" 
                            sx={ newLaunch ? { bgcolor:"#F58727", color:"#fefefe", paddingX:1, "&:hover":{bgcolor:"#F58727"} } :
                                            { bgcolor:"#fefefe", color:"#F58727", paddingX:1, borderWidth:"2px", "&:hover":{borderWidth:"2px"} }}
                                onClick={()=>
                                {
                                    setNewLaunch(!newLaunch);
                                    handlePropertiesByPropertyStatus("New Launch")

                                }
                            } >New Launch</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={()=>handlePropertiesByPropertyStatus("Under Construction")} variant="outlined" color="warning" sx={{ bgcolor:"#fefefe", color:"#F58727", paddingX:1, borderWidth:"2px","&:hover":{borderWidth:"2px"}}}>Under Construction</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={()=>handlePropertiesByPropertyType("Retails/ Shops")} variant="outlined" color="warning" sx={{ bgcolor:"#fefefe", color:"#F58727", paddingX:1, borderWidth:"2px","&:hover":{borderWidth:"2px"}}}>Retails/ Shops</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={()=>handlePropertiesByPropertyType("Office")} variant="outlined" color="warning" sx={{ bgcolor:"#fefefe", color:"#F58727", paddingX:1, borderWidth:"2px","&:hover":{borderWidth:"2px"}}}>Office</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={()=>handlePropertiesByPropertyType("Plots/Lands")} variant="outlined" color="warning" sx={{ bgcolor:"#fefefe", color:"#F58727", paddingX:1, borderWidth:"2px","&:hover":{borderWidth:"2px"}}}>Plots/Lands</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={()=>handlePropertiesByPropertyType("SCO Plots")} variant="outlined" color="warning" sx={{ bgcolor:"#fefefe", color:"#F58727", paddingX:1, borderWidth:"2px","&:hover":{borderWidth:"2px"}}}>SCO Plots</Button>
                        </Grid>
                   </Grid>
                </Grid>

            </Grid>
            <SectionSpacing/>
            <Grid container spacing={4}>

                <Grid item lg={3} sx={{paddingLeft:0}}>
                    <Box sx={{bgcolor:"#fefefe"}}>
                        
                    <Box>
                        <Box sx={{display:"flex"}} >
                                <Typography>Builder</Typography>
                                <ExpandMoreButton expand={expanded}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more">
                                    <ExpandMore/>
                                </ExpandMoreButton>
                                
                                
                        </Box>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
        
                        <Box sx={{ display: 'flex' }}>
                            <FormControl component="fieldset" variant="standard">
                                <FormGroup>
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={Godrej} onChange={handleBuilderChange} name="Godrej" />
                                    }
                                    label="Godrej Properties"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={DLF} onChange={handleBuilderChange} name="DLF" />
                                    }
                                    label="DLF"
                                />
                                <FormControlLabel
                                control={
                                <Checkbox checked={M3M} onChange={handleBuilderChange} name="M3M" />
                                }
                                label="M3M"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={BPTP} onChange={handleBuilderChange} name="BPTP" />
                                }
                                label="BPTP"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={Lodha} onChange={handleBuilderChange} name="Lodha" />
                                }
                                label="Lodha"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={Bhutani} onChange={handleBuilderChange} name="Bhutani" />
                                }
                                label="Bhutani"
                            />
                            
                </FormGroup>
            </FormControl>
      </Box>       
                                    
                        </Collapse>
                        

                    </Box>

                        <Box sx={{margin:"20px 0px"}}>
                                <FormControl>
                                <Typography sx={{fontWeight:"bold"}}>Rera Approved</Typography>
                                <RadioGroup row
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                    
                                >
                                        <FormControlLabel value="yes" control={<Radio size="small" sx={{color:"#F58727", '&.Mui-checked': { color: "#F58727"}, }}/>} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio size="small" sx={{color:"#F58727", '&.Mui-checked': { color: "#F58727"},}}/>} label="No" />
                            </RadioGroup>
                            </FormControl>

                        </Box>

                        <Box sx={{margin:"20px 0px"}}>
                            <Typography sx={{fontWeight:"bold"}}>Budget</Typography>
                            <Slider
                                aria-label="Custom marks"
                                defaultValue={0}
                                getAriaValueText={valuetext}
                                sx={{color:"#F58727"}}
                                step={25}
                                valueLabelDisplay="off"
                                marks={marks}
                            />
                        </Box>
                    </Box>
                </Grid>


                <Grid item lg={9}>
                    <Grid container spacing={8}>

                        {
                            propertiesData.length>0 && propertiesData?.map((property:any, index:number)=> (
                                <Grid item lg={4} key={index}>
                                    <PropertyCard data={property}/>
                                </Grid>
                            ))
                        }                   
                        
                    </Grid>
                    
                </Grid>
            </Grid>
        </Container>
    )
}