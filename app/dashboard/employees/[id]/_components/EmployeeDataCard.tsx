import { Employee } from "@/entities";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import DeleteEmployee from "@/app/dashboard/employees/[id]/_components/DeleteEmployee";
export default function EmployeeDataCard( {employee}: {employee: Employee}){
    return (
        <div className="flex flex-row items-center gap-2 bg-white 
 rounded-md flex-grow-0 h-fit px-4 m-2 py-2">
<div className="text x-l flex flex-col h-full justify-between">

<div className="h-full py-10">
<h1 className="font-bold"> {employee.employeeName + " " +  employee.employeeLastname} </h1>
<h1 > {employee.employeeEmail} </h1>
<h1 > {employee.employeePhonenumber} </h1>  
</div>

<div>
<DeleteEmployee employeeId={employee.employeeId} /> 

</div>
<Link className="underline" href={{pathname: `/dashboard/locations/`,
    query:{
 store:     String(employee.location?.locationId)

    }
}}>
    {employee.location?.locationName} 
    </Link> 
</div>
<div  className="h-full py-20 w-1 bg-zinc-300 mx-6" />
<Image src={employee.employeePhoto}
isZoomed
className="object-cover"
classNames={{
        img: "size-60"
    }}
/>
</div>
    )
}