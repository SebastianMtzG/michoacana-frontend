import { Button, Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";

export default async function FormNewlocation({store}: {store:string | string[] | undefined} ) {
    if(store) return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const { data } = await axios.get(`${API_URL}/managers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocation = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return (
<form action={createLocation} className="bg-purple-600 py-2 px-4 fex flex-col gap-6 w-full rounded-lg">
    <h1 className="text-3xl text-white text-center" >Crear Tienda</h1>
    <Input label="Nombre" name="locationName" />
    <Input label="Direccion" name="locationAdress" />
    <Input label="Latitud" name="locationLat" />
    <Input label="Longitud" name="locationLng" />
    <SelectManager managers = {responseManagers.data} locations={responseLocation.data} />
    <Button type="submit"> Subir </Button>
    </form>
);

}