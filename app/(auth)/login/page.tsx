import { Input, Button } from "@nextui-org/react"
import Link from "next/link"

export default function LoginPage(){
    return(
    <div  className="bg-purple-600 px-10 py-2 rounded-md">
    <p className="text-2x1 my-4 items-center text-white">Iniciar sesión <span></span></p>
    <div  className="flex flex-col gap-2">
    <Input label="Email" type="email" isRequired={true} size="sm" />
    <Input label="Contraseña" type="password" isRequired={true} size="sm" />
    </div>
<Button color="primary" > Iniciar Sesión </Button>
<p className="text-white">¿No tienes cuenta? <Link href="/signup">Registrate</Link> </p>
</div>
    )
}