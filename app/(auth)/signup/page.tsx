import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function SignupPage(){
    return (
    <div  className="bg-purple-600 px-10 py-2 rounded-md">
        <p className="text-2x1 my-4 items-center text-white">Registrarse en <span></span></p>
        <div  className="flex flex-col gap-2">
        <Input label="Email" type="email" isRequired={true} size="sm" />
        <Input label="Contraseña" type="password" isRequired={true} size="sm" />
        <Input label="Repetir contraseña" type="password" isRequired={true} size="sm" />

        </div>
    <Button color="primary" > Registrar </Button>
    <p className="text-white">¿Ya tienes cuenta? <Link href="/login">Inicia aquí</Link> </p>
    </div>
    );
}