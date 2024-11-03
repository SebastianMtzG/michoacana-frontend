
import { Manager, Location as LocationEntity } from "@/entities";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default async function ManagerCards(){
const response = await fetch(`${API_URL}/managers`, {
        method: "GET",
        headers:{
            ...authHeaders()
        },
        next:{
        tags: [ "dashboard:managers"]
        }
    });
    
    const data: Manager[] = await response.json()
    return data?.map((manager: Manager) => {
        return (
            <Link href={{pathname: `/dashboard/managers/${manager.managerId}`}}>
<Card className="mx-10 my-10 hoover:scale-130 hover:bg-pink-90">
    <CardHeader>
        <p className="full">Nombre: <b>{manager.managerFullNmame}</b></p>
    </CardHeader>
    <Divider/>
    <CardBody>
        <p className="full">Email: <b>{manager.managerEmail}</b></p>
        <p className="full">Teléfono: <b>{manager.managerPhotoNumber}</b></p>
    </CardBody>
</Card>
</Link>
        )
    })
    
}
 