import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import PredictionPage from '../pages/PredictionPage';
import ResultPage from '../pages/ResultPage';
import HistoryPage from '../pages/HistoryPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/predict" element={<PredictionPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/history" element={<HistoryPage />} />
        </Routes>
    );
};

export default AppRouter;
