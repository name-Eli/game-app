import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'c599398a2bc44a8b8064a8f783b60618'
    }
});

export default axiosInstance;