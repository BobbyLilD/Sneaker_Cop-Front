import http from '@/netClient/config.js';

export async function createAddress(country, city, street, building, apartment){
    try {
        const response = await http.post('/addresses/', {
            country: country,
            city: city,
            street: street,
            building: building,
            apartment: apartment
        })
        return response.data;
    } catch (error) {
        console.error({error});
        throw error;
    }
}

export async function deleteAddress(id){
    try {
        const response = await http.delete('/addresses/' + id);
        return response;
    } catch (error) {
        console.error({error});
        throw error;
    }
}