
import { ReactNode } from "react"
import ManagerCards from "./_components/ManagerCards"

export default function LayoutManagers({ children, count }: { children: ReactNode, count: ReactNode }) {
    return (
    <>
        <div className="w-4/12 overflow-y-auto">
            <ManagerCards />
        </div>
        <div className="w-7/12 flex flex-col justify-center items-center gap-10" >
            <div> {children}</div>
            <div> {count} </div>
        </div>
    </>
    )
}