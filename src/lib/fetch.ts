export const fetchAdmin = async (url: string, options?: RequestInit): Promise<Response> => {
    try {
        const api = `${process.env.NEXT_PUBLIC_API}/admin/${url}`;
        const response = await fetch(api, options);
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        return response;
    } catch (error) {
        console.error('Error during fetch:', error);
        throw error;
    }
};