import axios from "axios";
import { cookies } from "next/headers";
import { TOKEN_NAME } from "@/constants";
import { Select } from "@nextui-org/react";
import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";

const LocationsPage = async ({searchParams} : {
     searchParams: { [key: string]: string | string[] | undefined } ;
}) => {
    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME) ?. value
    let {data} = await axios.get<Location[]>("htpps://127.0.0.1:4000/locations", {
        headers: {
            Authorization: ` Bearer ${token}`
        },
    },
);
  

data = [
{
    locationId:0,
    locationName:"Ninguna",
    locationLatLng: [0,0],
    locationAddress: "No exiate"

    },
    ...data
 ]
  
    return( 
        <div className="w-8/12" >
            <div className="w-full flex flex-col items-center h-[90vh] bg-violet-50" >
                <div className="w-1/2 my-10">
        <SelectLocation locations={data} store={searchParams.store} />
                <div className="w-8/12">
                    <LocationCard store={searchParams.store}/>
                </div>
                </div>
            </div>
         </div>
    )
}

export default LocationsPage;