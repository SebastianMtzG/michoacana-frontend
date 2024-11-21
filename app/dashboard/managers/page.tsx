import { LuPlus } from "react-icons/lu";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import ModalGeneric from "../_components/ModalGeneric";
import FormCreateManager from "./_components/FormCreateManager";
import { Location } from "@/entities";

const ManagersPage = async () => {
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders(),
        }
    })
    const stores: Location[] = await responseStores.json()
    return ( 
    <ModalGeneric icon={<LuPlus size="20" />} >
        <FormCreateManager stores={stores} />
    </ModalGeneric>
    )
}

export default ManagersPage;