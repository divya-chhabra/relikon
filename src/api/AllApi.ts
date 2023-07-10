import {Api} from "../../utils/api";


export const LoadPropertiesByCity = (cities: any) => {
    return Api.get(`/houses?filters[city][$eq]=${cities}&populate[projectImages][populate]=*`)
    .then(result => {
        if (result.status == 200) {
            console.log("result.data", result.data)
          return result.data;

        }
        return {};
      })
}

export const LoadProperties = () => {
    return Api.get(`/houses?populate[locality][populate]=*&populate[amenities][populate]=*&populate[projectHighlights][populate]=*&populate[factsAndFeatures][populate]=*&populate[projectImages][populate]=*&populate[factsAndFeaturesImg][populate]=*&populate[projectHighlightsImg][populate]=*&populate[houses][populate]=*&populate[carpetArea][populate]=*`)
  .then(result => {
      if (result.status == 200) {
          console.log("result.data", result.data)
        return result.data;

      }
      return {};
    })
}

export const LoadPropertyDetailsById = (cities:any, id: any) => {
  return Api.get(`/houses/${id}?populate[locality][populate]=*&populate[amenities][populate]=*&populate[projectHighlights][populate]=*&populate[factsAndFeatures][populate]=*&populate[projectImages][populate]=*&populate[factsAndFeaturesImg][populate]=*&populate[projectHighlightsImg][populate]=*&populate[houses][populate]=*&populate[carpetArea][populate]=*`)
  .then(result => {
      if (result.status == 200) {
          console.log("result.data", result.data)
        return result.data;
      }
      return {};
    })
}