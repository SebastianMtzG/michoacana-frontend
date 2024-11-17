import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import { Employee } from "@/entities"
import FormUpdateEmployee from "./_components/FormUpdateEmployee"
import EmployeeDataCard from "./_components/EmployeeDataCard"
export default async function EmployeePage({params} : {params: {id: string}}){
const responseEmployee = await fetch (`${API_URL}/employeees/${params.id}`, {
    headers: {
        ...authHeaders()
    }
})

const employee: Employee = await responseEmployee.json()
return (
    <div className="w-full h-[90vh] flex flex-row items-cnter justify-center">
       <EmployeeDataCard  employee = {employee}/>
        <FormUpdateEmployee employee= {employee} />
    </div>
)
}