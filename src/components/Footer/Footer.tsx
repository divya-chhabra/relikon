import { Box } from "@mui/material";
import TopFooter from "./TopFooter";
import MidFooter from "./MidFooter";
import BottomFooter from "./BottomFooter";
import SectionSpacing from "../SectionSpacing";


export default function Footer(){
    return(
        <Box id="footer">
        {/* <SectionSpacing/>
        <TopFooter/> */}
        <SectionSpacing/>
        <MidFooter/>
        <BottomFooter/>
        </Box>
    )
}