import { Location } from "@/entities";
import { Input } from "@nextui-org/react";
import SelectStore from "../[id]/_components/SelectStore";
import { Button } from "@nextui-org/react";
import createManager from "@/actions/managers/create";
export default function FormCreateManager({stores}: {stores: Location[]}){
    return (
    <form action={createManager} className="flex flex-xol gap-4">
        <h1 className="text 2xl font-bold text-white"></h1>
        <Input label="Nombre completo" name="managerFullName" />
        <Input label="Salario" name="managerSalary" />
        <Input label="Correo" name="managerEmail" />
        <Input label="Numero de teléfono" name="managerPhoneNumber" />
        <SelectStore stores={stores} />
        <Button type="submit" color="primary">
            Crear manager
        </Button>
    </form>
    )
}