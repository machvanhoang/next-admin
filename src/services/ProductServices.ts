import { fetchAdmin } from "@/lib/fetch";
export const getProducts = async (page: number = 1) => {
    const res = await fetchAdmin(`products?page=${page}`, {
        cache: "no-cache"
    });
    return await res.json();
}
export const getProductDetail = async (productID: number) => {
    const res = await fetchAdmin(`products/${productID}/edit`, {
        cache: "no-cache"
    });
    return await res.json();
}