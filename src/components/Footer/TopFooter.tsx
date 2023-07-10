import { Container, Typography, Box, Grid } from "@mui/material";
import Image from "next/image";

export default function TopFooter(){
    return(
        <Container>
            <Box>
                <Typography variant="h4" sx={{textAlign:"center", fontWeight:"bold"}}>
                    Part of  
                    <Image style={{marginLeft:10, marginRight:10}}src="/assets/logo/RelikonPropertiesLogo.png" alt="Relikon Logo" width={32} height={32} />
                     Relikon Group
                </Typography>
            </Box>
        </Container>
    )
}