import { Button, Input } from "@nextui-org/react";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Manager, Location } from "@/entities";
import { updateLocation } from "@/actions/locations/update";

export default async function FormNewlocation({store}: {store:string | string[] | undefined} ) {
    if(!store || store === undefined || typeof store === "object") return null;
    const updateWithStoreId = updateLocation.bind(null, store);
    const responseManager = await fetch(`${API_URL}/managers`, {
        headers: {
           ...authHeaders()
        }, 
        next: {
            tags: ["dashboard:managers"]
        }
    })
    const dataManagers : Manager[] = await responseManager.json()
    const responseLocation = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
            }, 
            next: {
                tags: ["dashboard:locations"]
            }
    })


    const dataLocations: Location[] = await responseLocation.json()
    let foundLocation = dataLocations.find((location) => location.locationId === +store)
    let foundManager = dataManagers.find((manager) => manager.managerId === foundLocation?. managers?.managerId)

    return (
<form action={updateWithStoreId} className="bg-pink-600 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
    <h1 className="text-3xl text-white text-center" >Actualizar</h1>
    <Input required={true} defaultValue={foundLocation?.locationName} label="Nombre" name="locationName" />
    <Input required={true} defaultValue={foundLocation?.locationAddress} label="Direccion" name="locationAdress" />
    <Input required={true} defaultValue={foundLocation?.locationLatLng[0].toString()} label="Latitud" name="locationLat" />
    <Input required={true}  defaultValue={foundLocation?.locationLatLng[1].toString()} label="Longitud" name="locationLng" />
    <SelectManager defaultManager={foundManager?.managerId} managers = {dataManagers} locations={dataLocations} />
    <Button type="submit" color="primary"> Actualizar </Button>
    </form>
);

}