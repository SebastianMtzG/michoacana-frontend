import { Product } from "@/entities";
import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";


export default function ProductCard({ product}: {product : Product}){
    return (
        <Card className="hoover:sacle-110  max-w-[350px]">
            <CardHeader> {product.productName}</CardHeader>
                <Divider />
                <CardBody>
                <p>Nombre del producto: <b>{product.productName}</b></p>
                <p>Precio del producto: <b>{product.price}</b></p>
                 </CardBody>
            
        </Card>
    )
}