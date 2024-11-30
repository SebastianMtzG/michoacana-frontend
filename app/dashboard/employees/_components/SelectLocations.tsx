'use client'

import { Location } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

export default function SelectLocations({stores, defaultStore}: {stores: Location[], defaultStore?: number | undefined}) {
    try {
        return (
            <Select 
                label="Tienda" 
                name="location" 
                defaultSelectedKeys={defaultStore ? [String(defaultStore)] : undefined}
            >
                {
                    stores.map((store: Location) => (
                        <SelectItem key={String(store.locationId)}>
                            {store.locationName}
                        </SelectItem>
                    ))
                }
            </Select>
        );
    } catch (error) {
        console.error("Error in SelectLocations component:", error);
        return null; // Retornar null en caso de error para evitar romper la interfaz.
    }
}
