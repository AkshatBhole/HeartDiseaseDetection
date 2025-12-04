import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <motion.div
                className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default Loader;
