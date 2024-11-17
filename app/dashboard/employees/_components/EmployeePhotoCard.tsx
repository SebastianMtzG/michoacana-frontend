
import { Card, CardHeader, Divider, Image, CardFooter } from "@nextui-org/react"
import { Employee } from "@/entities"
import { Button } from "@nextui-org/react"
import Link from "next/link"

export default function EmployeePhotoCard({employee} : { employee: Employee}){
    return (
        <Card className="max-h-72">
            <CardHeader className="absolute top-0 bg.black bg-opacity-25 z-10"> 
             <h1 className="font-bold text-xl text-white drop-shadow-sm">  {employee.employeeName + " " + employee.employeeLastname}</h1>     
            </CardHeader>
       
        <Divider/>
        <Image src={employee.employeePhoto} className="z-0 object-cover" classNames={{img:"size-72"}} />
        <CardFooter className="absolute bottom-0 h-14">
        <Link href={`/dashboard/employees/${employee.employeeId}`}>
        <Button variant="ghost">Actualizar</Button>
        </Link>
        </CardFooter>
        </Card>
    )
}