
import { Employee, Location as LocationEntity } from "@/entities";
import axios from "axios";
import { API_URL } from "@/constants";
import { TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default async function EmployeesLocation({store} : {store : string | string[] | undefined}){
const token = cookies().get(TOKEN_NAME)?.value;
    const {data} = await axios.get<Employee[]>(`${API_URL}/employees/location/${store}`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    
    
    return data.map((employee) => {
        const fullName = employee.employeeName + " " + employee.employeeLastname;
        return (
            <Card className="mx-10 my-10">
    <CardHeader>
        <p className="full">Nombre: <b>{fullName}</b></p>
    </CardHeader>
    <Divider/>
    <CardBody>
        <p className="full">Email: <b>{employee.employeeEmail}</b></p>
        <p className="full">Teléfono: <b>{employee.employeePhonenumber}</b></p>
    </CardBody>
</Card>
        )
    })
    
}
 