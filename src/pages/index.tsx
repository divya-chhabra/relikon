import axios from "axios";
import Header from '@/components/Header/Header';
import Footer from "@/components/Footer/Footer";
import SectionSpacing from "@/components/SectionSpacing";
import { Button, Container} from '@mui/material';
import { Inter } from 'next/font/google';
import { STRAPI_API } from "../../config";

const inter = Inter({ subsets: ['latin'] })

const showProperties = async (e: any) => {
    const location = e.target.value;
    const response = await axios.get(`${STRAPI_API}/api/houses?filters[city][$eq]=${location}&populate[locality][populate]=*&populate[amenities][populate]=*&populate[projectHighlights][populate]=*&populate[factsAndFeatures][populate]=*&populate[projectImages][populate]=*&populate[factsAndFeaturesImg][populate]=*&populate[projectHighlightsImg][populate]=*`);
    console.log(response);
}

export default function Home() {
  return (
    <>
      <Header/>
      <SectionSpacing/>
      <Container>
        <Button onClick={(e: any)=>showProperties(e)}>Thane</Button>
        <Button onClick={(e: any)=>showProperties(e)}>Noida</Button>
      </Container>
      <SectionSpacing/>
      <Footer/>
    </>
  )
}
