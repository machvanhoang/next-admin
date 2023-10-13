export const fetchAdmin = async (url: string, options?: RequestInit): Promise<Response> => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        return response;
    } catch (error) {
        console.error('Error during fetch:', error);
        throw error;
    }
};