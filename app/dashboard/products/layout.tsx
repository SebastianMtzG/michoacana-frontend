
import { API_URL } from "@/constants";
import { Product, Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { ReactNode } from "react";
import FilteredCards from "./_components/FilterCard";
const Layoutproducts = async ({children} : {children:ReactNode}) => {

    const responseProducts = await fetch(`${API_URL}/products`, {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: ["dashboard:products"]
        },
    })
    const products: Product[] = await responseProducts.json();
    const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeaders(),

        }, 
        next: {
            tags: ["dashboard:providers"]
        }
    });
    const providers: Provider[] = await responseProviders.json();
    return (
        <div className="h-[90vh] w-full flex flex-row">
            <div className="w-4/12 ">
            <FilteredCards products={products} providers={providers}/>

            </div>
            <div className="w-6/12">
                {children}
            </div>
    </div>)
}

export default Layoutproducts;