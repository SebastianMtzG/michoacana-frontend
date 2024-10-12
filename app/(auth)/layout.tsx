import { Children } from "react"
import { Image } from "@nextui-org/react";

export default function AuthLayout ({
    children,
}:
Readonly<{
    children:React.ReactNode;
}>)
{
    return <div className="bg-pink-500 w-screen h-screen overflow-hidden grid">
        <div className="place content-center place-self-center place-items-center text-center">
        <div className="flex flex-col items-center my-4 bottom-10 relative">
            <Image src="/michoacana logo.jpg" alt="logo micoacana" width={150}  className="place-self-center" height={0}/>
            </div> 
            {children} </div>

    </div>
}