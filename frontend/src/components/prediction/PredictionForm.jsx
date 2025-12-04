import { useState, useEffect } from 'react';
import { usePrediction } from '../../hooks/usePrediction';
import { getModelColumns } from '../../api/predictionApi';
import AnimatedButton from '../common/AnimatedButton';
import Loader from '../common/Loader';
import { motion } from 'framer-motion';

const PredictionForm = () => {
    const { submitPrediction, loading, error } = usePrediction();
    const [formData, setFormData] = useState({});
    const [columns, setColumns] = useState([]);
    const [loadingColumns, setLoadingColumns] = useState(true);

    useEffect(() => {
        const fetchColumns = async () => {
            try {
                const result = await getModelColumns();
                if (result.success) {
                    setColumns(result.columns);
                    // Initialize form data
                    const initialData = {};
                    result.columns.forEach(col => initialData[col] = '');
                    setFormData(initialData);
                }
            } catch (err) {
                console.error("Failed to fetch columns", err);
                // Fallback or error handling
            } finally {
                setLoadingColumns(false);
            }
        };
        fetchColumns();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitPrediction(formData);
    };

    if (loadingColumns) return <Loader />;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card max-w-2xl mx-auto"
        >
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Enter Health Metrics</h2>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {columns.map((col) => (
                        <div key={col}>
                            <label className="block text-sm font-medium text-slate-700 mb-1 capitalize">
                                {col.replace(/_/g, ' ')}
                            </label>
                            <input
                                type="number"
                                step="any"
                                name={col}
                                value={formData[col] || ''}
                                onChange={handleChange}
                                required
                                className="input-field"
                                placeholder={`Enter ${col}`}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-end mt-8">
                    <AnimatedButton
                        type="submit"
                        className="btn-primary w-full md:w-auto"
                        disabled={loading}
                    >
                        {loading ? 'Analyzing...' : 'Analyze Risk'}
                    </AnimatedButton>
                </div>
            </form>
        </motion.div>
    );
};

export default PredictionForm;
