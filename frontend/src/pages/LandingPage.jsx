import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/common/AnimatedButton';

const LandingPage = () => {
    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-slate-50 to-primary-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6"
                >
                    Advanced Heart Disease <br />
                    <span className="text-primary-600">Detection System</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
                >
                    Leveraging machine learning to provide early risk assessment based on key health indicators. Fast, secure, and easy to use.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link to="/predict">
                        <AnimatedButton className="btn-primary text-lg px-8 py-4">
                            Get Started
                        </AnimatedButton>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default LandingPage;
