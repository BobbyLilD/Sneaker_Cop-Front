import http from '@/netClient/config';

export async function doRegister(name, password, email) {
    try{
        const response = await http.post('/auth/registration', {
            name,
            password,
            email
        })
        return response.data;
    } catch(error){
        console.error({error});
        throw error;
    }
}

export async function doLogin(email, password) {
    try{
        const response = await http.post('/auth/login', {
            email,
            password
        })
        const { accessToken } = response.data;
        localStorage.accessToken = accessToken;
        return accessToken;
    } catch(error){
        console.error({error});
        throw error;
    }
}

export async function doLogout() {
    try{
        await http.delete('/users/logout')
        localStorage.removeItem('accessToken');
    } catch(error){
        console.error({error});
        throw error;
    }
}

