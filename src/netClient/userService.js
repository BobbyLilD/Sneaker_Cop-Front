import http from '@/netClient/config.js';

export async function getUserInfo(){
    try {
        const response = await http.get('/users/me');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;    
    }
}