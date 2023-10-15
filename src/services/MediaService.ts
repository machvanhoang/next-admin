import { fetchAdmin } from "@/lib/fetch";
export const uploadMedia = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetchAdmin('media/upload', {
        method: "POST",
        cache: "no-cache",
        body: formData,
    });
    return await res.json();
}