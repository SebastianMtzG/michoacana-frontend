"use server"

import { API_URL } from "@/constants";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { authHeaders } from "@/helpers/authHeaders";
export default async function deleteProvider(providerId: string, formData: FormData){
    const response = await fetch(`${API_URL}/providers/${providerId}`, {
        method:  "DELETE",
        headers: {
            ...authHeaders(),
        },
    })
    if(response.status === 200){
    revalidateTag("dashboard:providers")
    redirect("/dashboard/providers")
    }
}

