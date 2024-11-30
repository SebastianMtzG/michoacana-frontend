import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import { Input, Button } from "@nextui-org/react"
import createEmployee from "@/actions/employee/create"
import SelectLocations from "./SelectLocations"
export default async function FormCreateEmployee(){
    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders(),
            'content-type': "application/json"

        }
    })
    const locations = await responseLocations.json();
    return (
        <form action={createEmployee} className=" flex flex-col gap-2 p-7 rounded-md  h-fit">
            <Input isRequired={true} label="Nombre" name="employeeName" placeholder="Julieta" />
            <Input isRequired={true} label="Apellidos" name="employeeLastname" placeholder="Garcia" />
            <Input isRequired={true} label="Correo Electrónico" name="employeeEmail" placeholder="julieta@gmail"/>
            <Input isRequired={true} label="Núm de teléfono" name="employeePhoneNumber" placeholder="37384595" />
            <Input  name="employeePhoto" type="file" />
           <SelectLocations stores={locations} />
            <Button type="submit" color="primary">
                Crear Empleado
            </Button>

        </form>
    )
}