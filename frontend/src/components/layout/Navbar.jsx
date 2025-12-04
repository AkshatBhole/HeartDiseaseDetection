import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Predict', path: '/predict' },
        { name: 'History', path: '/history' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-primary-600">HeartGuard</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={clsx(
                                    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative",
                                    location.pathname === item.path
                                        ? "text-primary-600"
                                        : "text-slate-600 hover:text-primary-500"
                                )}
                            >
                                {item.name}
                                {location.pathname === item.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
