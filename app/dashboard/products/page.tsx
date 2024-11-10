import createProduct from "@/actions/products/create";
import { Input } from "@nextui-org/react";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import { Button } from "@nextui-org/react";
import SelectProvider from "./_components/SelectProvider";
import { LuDollarSign } from "react-icons/lu";
const ProductsPage = async () => {
const responseProviders = await fetch(`${API_URL}/providers`,  {
    headers: {
        ...authHeaders(),
    }
})
const providers = await responseProviders.json()

    return (
        <form className="px-10 justify-center pt-10" action={createProduct}>
            <div className="flex flex-col px-10 rounded-md py-10 gap-6 bg-purple-500">
            <h1 className="text-2xl text-white font-bold">Crear Producto</h1>
            <Input label="Nombre" name="productName" />
            <Input label="Precio" endContent={<LuDollarSign size="20"/>} />
            <Input label="Num. de Sellos" name="CountSeal" />
            <SelectProvider providers={ providers}/>
            <Button color="primary" type="submit" >
                Crear Button
            </Button>
            </div>
        </form>
    )

}

export default ProductsPage;