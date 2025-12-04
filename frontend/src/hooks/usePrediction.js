import { useState } from 'react';
import { predictHeartDisease } from '../api/predictionApi';
import { useNavigate } from 'react-router-dom';

export const usePrediction = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const submitPrediction = async (data) => {
        setLoading(true);
        setError(null);
        try {
            // Convert inputs to numbers where appropriate
            const formattedData = Object.keys(data).reduce((acc, key) => {
                acc[key] = Number(data[key]);
                return acc;
            }, {});

            const result = await predictHeartDisease(formattedData);
            if (result.success) {
                navigate('/result', { state: { result } });
            } else {
                setError(result.error || 'Prediction failed');
            }
        } catch (err) {
            setError(err.response?.data?.error || err.message || 'An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    return {
        submitPrediction,
        loading,
        error,
    };
};
