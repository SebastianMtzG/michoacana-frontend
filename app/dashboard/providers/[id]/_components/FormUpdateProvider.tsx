import updateProvider from "@/actions/providers/update";
import { Provider } from "@/entities";
import { Input, Button } from "@nextui-org/react";
import DeleteProviderButton from "./DeleteButton";
import DeleteProvider from "./DeleteProvider";
export default function FormUpdateProvider({ provider }: { provider: Provider }) {
  const {providerId} = provider;
const updateProviderWithId = updateProvider.bind(null, providerId)
  
  return (
    <form action={updateProviderWithId} className="flex flex-wrap gap-4 flex-grow-0 bg-purple-300 rounded-md px-10 py-10 mx-20 items-center justify-center" >
      <div className="flex flex-wrap" >
      <h1 className="text-2xl">Crear Proveedor</h1>
      <Input
      className="max-w-[250px]"
        defaultValue={provider.providerName}
        label="Nombre"
        placeholder="Pecsi"
        name="providerName"
      />
      <Input
        className="max-w-[250px]"
        defaultValue={provider.providerEmail}
        label="Correo"
        placeholder="business@pecsi.com"
        name="providerEmail"
      />
      <Input
        className="max-w-[250px]" 
        defaultValue={provider.providerPhoneNumber}
        label="Número"
        placeholder="444XXXXXXX"
        name="providerPhoneNumber"
      />
      </div>
      <Button color="primary" type="submit">
        Crear Proveedor
      </Button>
      <DeleteProvider>
      <h1>Estás seguro de eliminar al proveedor ${provider.providerName} ?</h1>
        <DeleteProviderButton providerId={providerId} />
      </DeleteProvider>
    </form>
  );
}
