import { useState } from "react";
import HeaderWithSearch from "@/components/HeaderWithSearch/HeaderWithSearch";
import PropertyListings from "../../components/PropertyListings/PropertyListings";
import Footer from "../../components/Footer/Footer";
import { LoadProperties, LoadPropertiesByCity } from "../../api/AllApi";


export const getStaticPaths = async () => {
  var res = await (LoadProperties());
  var allData = res.data;
  const paths = allData?.map((user:any) => ({
    params: { cities: user.attributes.city.toString() },
  }))
  console.log(paths);
  return { paths, fallback: false  }
}

export const getStaticProps = async ({ params}:{params:any}) => {
  
  var data = await LoadPropertiesByCity(params?.cities?.toLowerCase());
  return {
          props: {res: data.data}
  }
  
}

export default function propListings(props:any){

  const { res } = props;

  const [propertiesData, setPropertiesData] = useState(res);
  const [searchTerm, setSearchTerm ] = useState("");
  
  
  const includeColumns = ["projectName", "builderName", "area", "propertyType", "propertyStat", "rooms", "price", "homeArea" ]

  const filterData = (searchTerm:string) => {

    const lowercasedValue = searchTerm.toLowerCase();
    if (lowercasedValue === "") 
      setPropertiesData(res);
    else {
      console.log(res);
      // const lowercasedValues = lowercasedValue.split(" ");
      const filteredData = res.filter( (item: any) => {
        return Object.keys(item.attributes).some(key =>
          includeColumns.includes(key) ? item?.attributes[key]?.toString().toLowerCase().includes(lowercasedValue): false
        );
      });
      setPropertiesData(filteredData);
    }   

  }

    return(
        <>
        <HeaderWithSearch searchTerm={searchTerm} handleSearchTerm={setSearchTerm} filterData={filterData} propertiesData={propertiesData}/>        
        <PropertyListings propertiesData={propertiesData} setPropertiesData={setPropertiesData}/>
        <Footer/>
        </>
    )
}
