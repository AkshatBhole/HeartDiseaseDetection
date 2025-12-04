import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, className, type = "button", disabled = false }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={className}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </motion.button>
    );
};

export default AnimatedButton;
