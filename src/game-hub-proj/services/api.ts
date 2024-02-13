import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '8f4600bc2a5c46dc932f5bc387ceb501'
    }
});

export default axiosInstance;