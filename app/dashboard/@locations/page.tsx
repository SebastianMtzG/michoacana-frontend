import { API_URL, TOKEN_NAME } from "@/constants";
import { Select } from "@nextui-org/react";
import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewlocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocatinButton";
import { authHeaders } from "@/helpers/authHeaders";
import UpdateLocation from "./_components/UpdateLocation";
import FormUpdateLocation  from "./_components/FormUpdateLocation"

const LocationsPage = async ({searchParams} : {
     searchParams: { [key: string]: string | string[] | undefined } ;
}) => {
    let response = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
        next:{
            tags:["dashboard:locations"]
        }
    },
);
  
let data: Location[] = await response.json()
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
                <div className="w-6/12">
                    <FormNewlocation store={searchParams.store}/>
                </div>
                <div className="flex flex-row-flex-grow-0 gap-10 items-center" >
                <DeleteLocationButton store={searchParams.store}/>
                <UpdateLocation store={searchParams.store}>
                     <FormUpdateLocation store={searchParams.store}/>
                </UpdateLocation>
                </div>
                </div>
            </div>
         </div>
    )
}

export default LocationsPage;