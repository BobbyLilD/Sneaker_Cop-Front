import axios from "axios";
import router from "../router";

const netClient = axios.create({
    baseURL: 'http://localhost/api',
    timeout: 10000
});

netClient.interceptors.request.use(
    (request) => {
        const {accessToken} = localStorage;
        if (accessToken) {
            request.headers = {
                'Content-Type': 'application/json',
                'token': localStorage.accessToken
            }
        }
        return request;
    },
    (error) => {
        console.error({error});
        return Promise.reject(error);
    }
)

netClient.interceptors.response.use(
    (response) => {
        if (response.status === 403){
            localStorage.removeItem('accessToken');
            router.push('/login');
        }
        return response;
    }
)

export default netClient;