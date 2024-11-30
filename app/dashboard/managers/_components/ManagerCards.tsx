
import { Manager, Location as LocationEntity } from "@/entities";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";
import FormCreateUserManager from "../[id]/FormCreateUser";
import ModalGeneric from "../../_components/ModalGeneric";
import { LuPlus } from "react-icons/lu";
import FormUpdateUser from "../../employees/[id]/FormUpdateUser";
export default async function ManagerCards() {
    const response = await fetch(`${API_URL}/managers`, {
        method: "GET",
        headers: {
            ...authHeaders(),
            'content-type': "application/json"
        },
        next: {
            tags: ["dashboard:managers"]
        }
    });

    const data: Manager[] = await response.json()
    return data?.map((manager: Manager) => {
        return (
            <Link href={{ pathname: `/dashboard/managers/${manager.managerId}` }}>
                <Card className="mx-10 my-10 hoover:scale-130 hover:bg-pink-90">
                    <CardHeader>
                        <p className="fullgap-2">Nombre: <b>{manager.managerFullNmame}</b></p>
                        {
                            manager.user ? (
                                <ModalGeneric icon={<LuPlus size="20" color="primary" />}>
                                    <FormUpdateUser user={manager.user} />
                                </ModalGeneric>
                            ) : (
                                <ModalGeneric icon={<LuPlus size="20"  />}>
                                    <FormCreateUserManager manager={manager} />
                                </ModalGeneric>
                            )
                        }
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="full">Email: <b>{manager.managerEmail}</b></p>
                        <p className="full">Teléfono: <b>{manager.managerPhotoNumber}</b></p>
                    </CardBody>
                </Card>
            </Link>
        )
    })

}
