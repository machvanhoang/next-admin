import { fetchAdmin } from "@/lib/fetch";
export const getCustomers = async (page: number = 1) => {
    const res = await fetchAdmin(`customers?page=${page}`, {
        cache: "no-cache"
    });
    return await res.json();
}
export const getCustomerDetail = async (customerId: number) => {
    const res = await fetchAdmin(`customers/${customerId}/edit`, {
        cache: "no-cache"
    });
    return await res.json();
}
export const updateCustomer = async (customerId: number, data: any) => {
    const res = await fetchAdmin(`customers/${customerId}`, {
        cache: "no-cache",
        method: "PUT",
        body: JSON.stringify(data)
    });
    return await res.json();
}