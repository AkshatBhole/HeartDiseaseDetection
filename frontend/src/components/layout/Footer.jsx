const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-slate-400">© {new Date().getFullYear()} HeartGuard. All rights reserved.</p>
                <p className="text-slate-500 text-sm mt-2">
                    Disclaimer: This application is for educational purposes only and does not constitute medical advice.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
