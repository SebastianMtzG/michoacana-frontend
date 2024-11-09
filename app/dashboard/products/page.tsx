import { API_URL } from "@/constants";
import { Product } from "@/entities";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";
import FilteredCards from "./_components/FilterCard";
const ProductsPage = async () => {

    const response = await fetch(`${API_URL}/products`, {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: ["dashboard:prodcuts"]
        },
    })
    const products: Product[] = await response.json();
    return (
        <div className="h-[90vh] w-full">
            <div className="w-4/12 ">
            <FilteredCards products={products}/>

            </div>
    </div>);
}

export default ProductsPage;