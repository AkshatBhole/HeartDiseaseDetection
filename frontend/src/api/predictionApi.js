import axiosClient from './axiosClient';

export const predictHeartDisease = async (data) => {
    const response = await axiosClient.post('/predict', data);
    return response.data;
};

export const getPredictionHistory = async () => {
    const response = await axiosClient.get('/predictions');
    return response.data;
};

export const getModelColumns = async () => {
    const response = await axiosClient.get('/columns');
    return response.data;
};
