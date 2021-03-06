import http from '@/netClient/config.js';

export async function getFrontImage(id) {
    try {
        const response = await http.get('/images/'+ id);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}