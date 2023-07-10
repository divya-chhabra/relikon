import { useEffect, useState } from "react";
import { Box, Link, Container, List, ListItem, Typography } from "@mui/material";
import SectionSpacing from "../SectionSpacing";
import {styled} from "@mui/material/styles";

const StyledLink = styled(Link)`
    text-decoration:none;
    color:#000;
    border-bottom:3px solid transparent;
`
const StyledTypography = styled(Typography)`
font-weight:bold;
`

export default function PropertyDetailsNavigation() {
    const [isFixed, setIsFixed] = useState(false);
    const [activeSection, setActiveSection] = useState('');

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
    const scrollThreshold = 700;

    const footerHeight = document.getElementById('footer')?.offsetHeight || 0;

    const scrollAmountFromBottom = document.documentElement.scrollHeight - footerHeight -scrollPosition;

    // Update the state based on the scroll position
    setIsFixed(scrollPosition > scrollThreshold && scrollAmountFromBottom > 100);

    
    // Get all the sections on the page
    const sections = document.querySelectorAll('section');

    // Loop through the sections to find the active one
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];

      // Get the top and bottom positions of the section
      const top = section.offsetTop -150;
      const bottom = top + section.offsetHeight+100;

      // Check if the scroll position is within the section
      if (scrollPosition - 50 >= top && scrollPosition <= bottom) {
        // Set the active section based on its ID
        setActiveSection(section.id);
        break;
      }
    }
    }


    return (
            <>
                <SectionSpacing />
                <Box sx={ isFixed?{position:'fixed', top:0,left:0, width: "100%", bgcolor:"#F4F4F8", zIndex:9999}:
                                  { position:'static', width: "100%", bgcolor:"#F4F4F8" }}>
                    <Container>
                        <List sx={{display:"flex"}}>
                            <ListItem>
                                <StyledLink href="#section1" className={activeSection ==='section1'?'active':''}>
                                    <StyledTypography variant="body1">Locality</StyledTypography>
                                </StyledLink>
                            </ListItem>

                            <ListItem>
                                <StyledLink href="#section2" className={activeSection ==='section2'?'active':''}>
                                    <StyledTypography variant="body1">Overview</StyledTypography>
                                </StyledLink>
                            </ListItem>

                            <ListItem>
                                <StyledLink href="#section3" className={activeSection ==='section3'?'active':''}>
                                    <StyledTypography variant="body1">Amenities</StyledTypography>
                                </StyledLink>
                            </ListItem>

                            <ListItem>
                                <StyledLink href="#section4" className={activeSection ==='section4'?'active':''}>
                                    <StyledTypography variant="body1">Project Highlights</StyledTypography>
                                </StyledLink>
                            </ListItem>

                            <ListItem>
                                <StyledLink href="#section5" className={activeSection ==='section5'?'active':''}>
                                    <StyledTypography variant="body1">Similar Projects</StyledTypography>
                                </StyledLink>
                            </ListItem>

                        </List>
                    </Container>
                </Box>
            </>
            )
}