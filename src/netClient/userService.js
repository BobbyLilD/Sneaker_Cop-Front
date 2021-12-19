import http from '@/netClient/config.js';

export async function getUserInfo(){
    try {
        const response = await http.get('/users/me');
        const user = response.data;
        const response_addresses = await http.get('/addresses');
        user.addresses = response_addresses.data.infos;
        const response_payments = await http.get('/payments');
        user.paymentInfos = response_payments.data.infos;
        return user;
    } catch (error) {
        console.error(error);
        throw error;    
    }
}

export async function updateUserInfo(name, email, password) {
    try {
        const response = await http.patch('/users/me',{
            name: name,
            email: email,
            password: password
        })
        return response;
    } catch (error) {
        console.error(error);
        throw error;    
    }
}