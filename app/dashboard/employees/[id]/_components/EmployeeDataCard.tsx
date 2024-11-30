import { Employee } from "@/entities";
import { LuUser } from "react-icons/lu";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import FormCreateUserEmployee from "@/app/dashboard/employees/[id]/FormCreateUserE";
import CreateUser from "./CreateUser";
import FormUpdateUser from "../FormUpdateUser";
import DeleteEmployee from "@/app/dashboard/employees/[id]/_components/DeleteEmployee";

export default function EmployeeDataCard({ employee }: { employee: Employee }) {
    try {
        return (
            <div className="flex flex-row items-center gap-2 bg-white rounded-md flex-grow-0 h-fit px-4 m-2 py-2">
                <div className="text-xl flex flex-col h-full justify-between">
                    <div className="h-full py-10">
                        <h1 className="font-bold">
                            {"Cecilia Garcia"}
                        </h1>
                        <h1>{employee.employeeEmail || "cecilia@gmail"}</h1>
                        <h1>{employee.employeePhonenumber || "444565666"}</h1>
                    </div>
                    <div>
                        <DeleteEmployee employeeId={employee.employeeId} />
                    </div>


                    <Link
                        className="underline"
                        href={{
                            pathname: `/dashboard/locations/`,
                            query: {
                                store: String(employee.location?.locationId || "0"),
                            },
                        }}
                    >
                        {employee.location?.locationName || "Juriquila"}
                    </Link>
                </div>

                <div className="h-full py-20 w-1 bg-zinc-300" />

                <Image src="../../../michuaq.jpg"/>

                <CreateUser icon={<LuUser size="20" />} photo={employee?.employeePhoto}>
                    {!employee.user ? (
                        <FormCreateUserEmployee employee={employee} />
                    ) : (
                        <FormUpdateUser user={employee.user} />
                    )}
                </CreateUser>
            </div>
        );
    } catch (error) {
        console.error("Error en EmployeeDataCard:", error);
        return <div>Error al renderizar los datos del empleado.</div>;
    }
}
