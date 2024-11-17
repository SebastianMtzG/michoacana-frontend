"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
export default async function createEmployee( formData : FormData) {
    const response = await fetch (`${API_URL}/employees/`, {
        method: "PATCH",
        headers: {
            ...authHeaders()
        }, 
        body: formData,
    })
    if(response.status === 201) revalidateTag("dashboard:employees");
    return;
}