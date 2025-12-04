import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedButton from '../common/AnimatedButton';

const PredictionResultCard = ({ result }) => {
    const isHighRisk = result.prediction_raw === 1;

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="card max-w-lg mx-auto text-center"
        >
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${isHighRisk ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                }`}>
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isHighRisk ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                </svg>
            </div>

            <h2 className="text-3xl font-bold mb-2 text-slate-800">
                {result.prediction_label}
            </h2>

            {result.probability !== null && (
                <p className="text-slate-500 mb-6">
                    Confidence: {(result.probability * 100).toFixed(1)}%
                </p>
            )}

            <p className="text-slate-600 mb-8">
                {isHighRisk
                    ? "The model has detected patterns associated with a higher risk of heart disease. Please consult a healthcare professional."
                    : "The model suggests a lower risk based on the provided metrics. Maintain a healthy lifestyle."}
            </p>

            <div className="flex justify-center space-x-4">
                <Link to="/predict">
                    <AnimatedButton className="btn-primary">
                        Try Again
                    </AnimatedButton>
                </Link>
                <Link to="/history">
                    <AnimatedButton className="btn-secondary">
                        View History
                    </AnimatedButton>
                </Link>
            </div>
        </motion.div>
    );
};

export default PredictionResultCard;
