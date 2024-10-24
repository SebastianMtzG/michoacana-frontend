import { Image } from "@nextui-org/react"

export default function Header(){
    return (
        <div className="w-screen h-[15vh]  bg-pink-400 flex flex-row items-center px-9 space-x-3">
            <Image src="/michoacana logo.jpg " width={80} height={0} alt="michoacana logo" draggable={false} />

        </div>
    )
}