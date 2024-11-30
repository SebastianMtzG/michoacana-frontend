import { Location } from "@/entities";
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { API_URL } from "@/constants";
import { datalist } from "framer-motion/client";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";

export default async function LocationCard({ store }: {store: string | string[] | undefined }) {
    if(!store) return null;
    const response = await fetch(`${API_URL}/locations/${store}`, {
        headers: {
            ...authHeaders()
        },
        next: {
             tags: ["dashboard:locations", `dashboard:locations: ${store}`]
        }
    });

    const data: Location = await response.json()
    return (
        <Card>
            <CardHeader>
                <b className="w-full">{data.locationName}</b>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full">Manager:
                     <Link href={{pathname: `/dashboard/managers/${data.managers?.managerId} `}}> 
                <b className="underline" >{data.managers?.managerFullNmame}</b></Link></p>
           <p className="w-full">
            Dirección: <b>{data.locationAddress}</b>
           </p>
            <Image src="/../../mapjuri.jpg" />
            </CardBody>
        </Card>
    );
}
