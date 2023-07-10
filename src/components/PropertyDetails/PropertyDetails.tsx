import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, IconButton } from "@mui/material";
import {Call, Email} from '@mui/icons-material';
import TopHeader from "./TopHeader";
import SectionSpacing from "../SectionSpacing";
import PropertyDetailsNavigation from "./PropertyDetailsNavigation";
import Locality from "./Locality";
import RelatedProperties from "./RelatedProperties";
import Overview from "./Overview";
import Amenities from "./Amenities";
import FactsAndFeatures from "./FactsAndFeatures";
import ProjectHighlights from "./ProjectHighlights";


export default function PropertyDetails({details}:{details:any}){

    const [displayContact, setDisplayContact] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    },[]);
    const handleScroll = () => {
        
        // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Define the scroll amount at which you want to change the position
    const scrollThreshold = 1100;

    const footerHeight = document.getElementById('footer')?.offsetHeight || 0;

    const scrollAmountFromBottom = document.documentElement.scrollHeight - window.scrollY-window.innerHeight;
        // Update the state based on the scroll position
        setDisplayContact(scrollAmountFromBottom < footerHeight+200);
      };

      const router = useRouter();
    
    return(
        <>
        <SectionSpacing/>
        <TopHeader details={details}/>
        <PropertyDetailsNavigation/>
        <Locality details={details}/>
        <Overview details={details}/>
        {details?.amenities.length>0 && <Amenities details={details}/>}
        {details?.factsAndFeatures.length>0 && <FactsAndFeatures details={details}/>}
        {details?.projectHighlights.length>0 && <ProjectHighlights details={details}/>}
        {details?.houses.data.length>0 && <RelatedProperties details={details}/> }

        <Box>
        <IconButton sx={ displayContact?{position: "fixed", bottom: 10, right: 10, zIndex: 10000, bgcolor:"#F58727", color:"#fefefe", "&:hover":{color:"#F58727"} }:
                        {display:"none"}} onClick={()=>router.push("#contact")}>
            <Email/>
        </IconButton>
        </Box>
        </>
    )
}