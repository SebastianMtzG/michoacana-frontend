import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";

export default function ProviderCard({ provider }: { provider: Provider }) {
    return (
        <Card className="w-full min-w-[350px] max-w-[350px]">
            <CardHeader>
              <b>  {provider.providerName}</b>
              <Image src="../../gmail.png" className=" mx-auto  w-1/4 rounded-lg" />
            </CardHeader>
            <Divider />
            <CardBody>
                <p>
                    Correo electrónico:
                </p>
                <b>{provider.providerEmail}</b>
                <p>
                    Número de teléfono: 
                </p>
                <b>{provider.providerPhoneNumber}</b>
                {provider?.products?.length !== 0 ? (
                    <p>
                        Tiene <b>{provider?.products?.length}</b> productos
                    </p>
                ) : (
                    <p>No tiene productos</p>
                )}
            </CardBody>
        </Card>
    );
}
