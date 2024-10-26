'use client'

import { Location } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function SelectLocation({
    locations, 
    store} : {
        locations : Location[];
         store: string | string[] | undefined
        }){
       
 const router = useRouter()
    return (<Select placeholder="Selecciona una tienda" label="Tienda" classNames={{
        mainWrapper: "hoover:ring2-violet-700-rounded-xl"
    }}
    selectedKeys={store ? store : "0"}
    onChange={((e) => {
        if(e.target.value === "0" || e.target.value === " ") {
             router.push(`/dashboard`)
        } else {
            router.push(`/dashboard?store= ${e.target.value}`);

        }
    })}
    >
     {locations.map((location : Location) =>{
         return(
         <SelectItem  key ={location.locationId} value={location.locationId}> 
                 {location.locationName}
         </SelectItem>
         )
     })
 }
 </Select>
    )
}