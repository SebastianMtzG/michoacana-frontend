import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Product } from "@/entities";
import { Provider } from "@/entities";
import DeleteProduct from "./_components/DeleteProduct";
import ProductCard from "../_components/ProductCard";
import UpdateProduct from "./_components/UpdateProduct";
export default async function ProductPage({
    params,
}: {
    params: {
        id: string;
    }
}){
    const responseProduct = await fetch(`${API_URL}/products/${params.id}`,
   {
    headers:{
        ...authHeaders(),

    }
   })
   const product:Product = await responseProduct.json();

   const responseProviders = await fetch(`${API_URL}/products/${params.id}`,
    {
     headers:{
         ...authHeaders(),
     }, 
     next: {
        tags: [`dashboard:products:${params.id}`]
     }
    })
    const providers: Provider[] = await responseProviders.json();

    return (
        <div className="w-full">
            <div className="bg-purple-500">
            <h1 className="w-full font-bold text-white text-center text-2xl">Nombre del producto: {product.productName} </h1>
            <h1 className="text-xl font-bold text-white text-center" >Precio: {product.price} </h1>
            <h1 className=" font-bold text-md text-white text-center py-2" > {product.countSeal} </h1>
            </div>
        <UpdateProduct product={product} providers={providers}/>
        <div className="pl-10">
        <DeleteProduct  productId={product.productId} />
        </div>
        </div>
    )
}