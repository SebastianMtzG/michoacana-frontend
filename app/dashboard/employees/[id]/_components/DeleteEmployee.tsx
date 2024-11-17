import { LuTrash } from "react-icons/lu"
import { Button } from "@nextui-org/react"
import deleteEmployee from "@/actions/employee/delete";
export default function DeleteEmployee({employeeId}: {employeeId : string}){
  const deleteEmployeeById = deleteEmployee.bind(null, employeeId);
    return ( 
    <form action={deleteEmployeeById}>
    <Button type="submit">
        <LuTrash size="20" />
    </Button>
    </form> 
  )
}