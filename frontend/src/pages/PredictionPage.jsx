import PredictionForm from '../components/prediction/PredictionForm';
import { motion } from 'framer-motion';

const PredictionPage = () => {
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-3xl mx-auto"
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-slate-900">Health Assessment</h1>
                    <p className="mt-2 text-slate-600">
                        Please provide the following health metrics for analysis.
                    </p>
                </div>
                <PredictionForm />
            </motion.div>
        </div>
    );
};

export default PredictionPage;
