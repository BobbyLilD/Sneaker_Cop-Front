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

export async function createPaymentInfo(cardNum, cvv, expirationDate, owner){
    try {
        const response = await http.post('/payments', {
            cardNum: cardNum,
            cvv: cvv, 
            expirationDate: expirationDate,
            owner: owner
        })
        return response;
    } catch (error) {
        console.error(error);
        throw error;    
    }
}

export async function deletePaymentInfo(id) {
    try {
        const response = await http.delete("/payments" + id);
        return response;
    } catch (error) {
        console.error(error);
        throw error;        
    }
}