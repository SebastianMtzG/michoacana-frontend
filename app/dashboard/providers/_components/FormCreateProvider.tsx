
import createProvider from "@/actions/providers/create"
import { Input } from "@nextui-org/react"
import { Button } from "@nextui-org/react"

export default function FormCreateProvider(){
    return (
    <form action={createProvider} className="flex flex-col gap-2 flex-grow-0" >
        <h1 className="text-2xl text-white" >Crear Proveedor</h1>
        <Input label="Nombre" placeholder="Sigma" name="providerName" />
        <Input label="Correo" placeholder="bussiness@sigma" name="providerEmail" />
        <Input label="Numero" placeholder="444XXXX" name="providerPhoneNumber" />
    <Button color="primary" type="submit" > Crear Proveedor</Button>
    </form>
    )
}


