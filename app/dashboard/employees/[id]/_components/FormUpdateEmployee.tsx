import updateEmployee from "@/actions/employee/update";
import { Employee } from "@/entities"
import { Input, Button } from "@nextui-org/react"
import SelectLocations from "../../_components/SelectLocation";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
export default async function FormUpdateEmployee({employee} : {employee : Employee}){
    const {employeeId} = employee;
    const updateEmployeeById = updateEmployee.bind(null, employeeId);
               const responseLocations = await fetch(`${API_URL}/locations}`, {
                headers: {
                    ...authHeaders()
                }
            })
        const locations = await responseLocations.json();
    return (
        <form action={updateEmployeeById} className=" flex flex.col. gap-2 p-7 rounded-md bg-purple-600 h-fit">
            <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName}/>
            <Input label="Apellidos" name="employeeLastname" defaultValue={employee.employeeLastname}/>
            <Input label="Correo Electrónico" name="employeeEmail" defaultValue={employee.employeeEmail}/>
            <Input label="Núm de teléfono" name="employeePhoneNumber" defaultValue={employee.employeePhonenumber}/>
            <Input  name="employeePhoto" type="file" defaultValue={employee.employeePhoto}/>
            <SelectLocations stores={locations} />
            <Button type="submit" color="primary">
                Actualizar 
            </Button>

        </form>
    )
}