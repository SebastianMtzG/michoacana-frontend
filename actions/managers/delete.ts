"use server"
import { API_URL } from "@/constants";
import { revalidateTag } from "next/cache";
import { authHeaders } from "@/helpers/authHeaders";

export default async function deleteManager(managerId: string, formData: FormData){
    const response = await fetch(`${API_URL}/managers/${managerId}`, {
        method:  "DELETE",
        headers: {
            ...authHeaders(),
        },
    })
    console.log(response.status);
    revalidateTag("dashboard:managers")
}

