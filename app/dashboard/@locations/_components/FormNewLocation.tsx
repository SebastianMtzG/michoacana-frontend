import { Button, Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Manager, Location } from "@/entities";

export default async function FormNewlocation({store}: {store:string | string[] | undefined} ) {
    if(store) return null;
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
    return (
<form action={createLocation} className="bg-pink-600 py-1 px-2 flex flex-col gap-2 w-full pt-2 rounded-lg">
    <h1 className="text-2xl text-white text-center" >Crear Tienda</h1>
    <Input  required={true} label="Nombre" name="locationName" />
    <Input  required={true} label="Direccion" name="locationAdress" />
    <Input  required={true} label="Latitud" name="locationLat" />
    <Input required={true} label="Longitud" name="locationLng" />
    <SelectManager  managers = {dataManagers} locations={dataLocations} />
    <Button type="submit" color="primary"> Subir </Button>
    </form>
);

}