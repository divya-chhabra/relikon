import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PropertyDetails from "@/components/PropertyDetails/PropertyDetails";
import { LoadProperties, LoadPropertyDetailsById } from "../../../api/AllApi";


export const getStaticPaths = async () => {
    var res = await (LoadProperties());
    var data = res.data;
    const paths = data?.map((user:any) => ({
      params: { id: user.id.toString(), cities:user.attributes.city.toString() },
    }))
    console.log(paths);
    return { paths, fallback: false  }
  }

  export const getStaticProps = async ({ params}:{params:any}) => {
    
    var data = await LoadPropertyDetailsById(params?.cities?.toLowerCase(),params?.id?.toLowerCase());
    return {
            props: {res: data.data.attributes}
    }
    
  }
  
export default function PropDetails({res}:{res:any}){
     console.log(res);
    return(
        <>
        <Header/>
        <PropertyDetails details={res} />
        <Footer/>
        </>
    )
}