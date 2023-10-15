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
export const getProductVariants = async (productID: number) => {
    const res = await fetchAdmin(`products/${productID}/variants`, {
        cache: "no-cache"
    });
    return await res.json();
}
export const createVariantByProduct = async (productID: number, data: any) => {
    const res = await fetchAdmin(`products/${productID}/variants`, {
        cache: "no-cache",
        method: "POST",
        body: JSON.stringify(data)
    });
    return await res.json();
}
export const getVariantByProduct = async (productID: number, variantID: number,) => {
    const res = await fetchAdmin(`products/${productID}/variants/${variantID}`, {
        cache: "no-cache",
    });
    return await res.json();
}
export const updateVariantByProduct = async (productID: number, variantID: number, data: any) => {
    const res = await fetchAdmin(`products/${productID}/variants/${variantID}`, {
        cache: "no-cache",
        method: "PUT",
        body: JSON.stringify(data)
    });
    return await res.json();
}