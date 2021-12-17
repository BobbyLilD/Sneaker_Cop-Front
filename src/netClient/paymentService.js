import http from '@/netClient/config.js';

export async function getPaymentInfos(){
    try {
        const response = await http.get('/payments/');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}