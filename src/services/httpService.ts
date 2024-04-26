import axios from 'axios'
import useStore from '../hooks/useStore';

const API_URL = 'http://localhost:3333';

// axios.interceptors.request.use();

const httpService = axios.create({
    baseURL: API_URL
});

httpService.interceptors.request.use(
    (config) => {
        const { idToken } = useStore.getState();
        if (idToken) {
            config.headers['Authorization'] = `Bearer ${idToken}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

export default httpService;      