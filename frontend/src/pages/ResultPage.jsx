import { useLocation, Navigate } from 'react-router-dom';
import PredictionResultCard from '../components/prediction/PredictionResultCard';

const ResultPage = () => {
    const location = useLocation();
    const result = location.state?.result;

    if (!result) {
        return <Navigate to="/predict" replace />;
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4">
            <PredictionResultCard result={result} />
        </div>
    );
};

export default ResultPage;
