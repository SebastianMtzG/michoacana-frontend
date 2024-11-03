"use server"
import { API_URL } from "@/constants";
import { revalidateTag } from "next/cache";
import { authHeaders } from "@/helpers/authHeaders";

export default async function deleteManager(managerId: string,  formData: FormData){
    let manager: any = {};
    for (const key  of formData.keys()){
        manager[key] = formData.get(key);
    }
    const response = await fetch(`${API_URL}/managers/${managerId}`, {
        method:  "PATCH",
        body: JSON.stringify(manager),
        headers: {
            ...authHeaders(),
        },
    })
    if(response.status === 200) {
        revalidateTag("dashboard:managers")
        revalidateTag(`dashboard:managers:${managerId}`)

    }
}

