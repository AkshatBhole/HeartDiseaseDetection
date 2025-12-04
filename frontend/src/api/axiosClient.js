import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://heartdiseasedetection-1.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;
