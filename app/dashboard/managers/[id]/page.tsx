import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Manager } from "@/entities";
import ManagerCard from "./_components/ManagerCard";
export default async function ManagerPage({
    params,
}:{
    params: {
        id:string;
    };
}) {
    const response = await fetch(`${API_URL}/managers/${params.id}` , {
        headers: {
            ...authHeaders(),
        },
        next:{
            tags: [ `dashboard:managers:${params.id}`]
        }
    });
    const data:Manager = await response.json();
    return (
        <div>
            <ManagerCard manager={data} />
        </div>
    );
}