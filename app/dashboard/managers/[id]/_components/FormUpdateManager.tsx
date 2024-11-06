import { Input } from "@nextui-org/react";
import { Manager } from "@/entities";
import updateManager from "@/actions/managers/update";
import { Button } from "@nextui-org/react";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import SelectStore from "./SelectStore";
export default async function FormUpdateManager({ manager }: { manager: Manager }) {
  const updateManagerWithId = updateManager.bind(null, manager.managerId);
  const responseStores = await fetch (`${API_URL}/locations`, {
    headers: {
      ...authHeaders()
    }
  })
  const stores = await responseStores.json()
  return (
    <form action={updateManagerWithId}  className="bg-purple-500 rounded-md flex flex-col flex-grow-0 gap-2" >
      <h3 className="text-2xl text-white font-bold text-center">Actualizar Manager</h3>
      <Input
      required={true}
      isRequired
        defaultValue={manager.managerFullNmame}
        label="Nombre completo"
        placeholder="Marco Aurelio"
        name="managerFullName"
      />
      <Input
        required={true}
        isRequired
        defaultValue={manager.managerEmail}
        label="correo electronico"
        placeholder="manager@ocso.com"
        name="managerEmail"
      />
      <Input
      required={true}
      isRequired
      label="Salario"
        defaultValue={String(manager.managerSalary)}
        placeholder="12000"
        name="managerSlary"
      />

        <Input
        required={true}
        isRequired
        label="Numero de telefono"
        defaultValue={manager.managerPhotoNumber}
        placeholder="442345324"
        name="managerPhotoNumber"
        />
      <SelectStore stores={stores} defaultStore={manager?.location?.locationId} />
        <Button color="primary" type="submit" >
            Actualizar
        </Button>
    </form>
  );
}
