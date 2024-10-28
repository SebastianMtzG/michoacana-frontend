"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { Manager } from "@/entities";
import { Location } from "@/entities";

interface SelectManagerProps{
    managers: Manager[],
    locations: Location[],
    defaultManager?: string,
}


export default function SelectManager({managers, locations, defaultManager = undefined}: SelectManagerProps ){
const disabledKeys = locations.map((location: Location) => {
    if(location.managers?.managerId !== defaultManager)
    return location.managers?.managerId
}).filter((managerId) => managerId !== undefined)
    return(
            <Select defaultSelectedKeys={defaultManager !== undefined ? [defaultManager] : []}   label="Manager" name="manager" disabledKeys = {disabledKeys}>
            {managers.map((manager: Manager) =>{
            return (
            <SelectItem key={manager.managerId}>
            [manager.managerFullName]
            </ SelectItem>
                        );
            })}
            </ Select>
        );
}