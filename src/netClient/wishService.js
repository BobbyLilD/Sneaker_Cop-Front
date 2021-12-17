import http from '@/netClient/config.js';

export async function getWishes(itemID){
    try {
        const response = await http.get('/wishes/' + itemID);
        return response.data.wishes;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createWish(itemID){
    try {
        const response = await http.post('/wishes/' + itemID);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export async function deleteWish(itemID){
    try {
        const response = await http.delete('/wishes/'+itemID);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}