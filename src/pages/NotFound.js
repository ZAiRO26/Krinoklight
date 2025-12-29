import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Search } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full filter blur-[120px]"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-cyan/20 rounded-full filter blur-[80px]"
                    animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-2xl mx-auto">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="mb-8"
                    >
                        <span className="text-[150px] md:text-[200px] font-bold font-display gradient-text leading-none">
                            404
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Page Not Found
                    </motion.h1>

                    <motion.p
                        className="text-lg text-slate-600 mb-10"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        The page you're looking for doesn't exist or has been moved.
                        Don't worry, let's get you back on track.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <MagneticButton to="/" variant="cta">
                            <Home className="w-4 h-4 mr-2" />
                            Back to Home
                        </MagneticButton>

                        <MagneticButton to="/services" variant="secondary">
                            <Search className="w-4 h-4 mr-2" />
                            Browse Services
                        </MagneticButton>
                    </motion.div>

                    <motion.div
                        className="mt-16 pt-8 border-t border-slate-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <p className="text-slate-500 mb-4">Popular pages you might be looking for:</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['Services', 'About', 'Contact', 'Clients'].map((page) => (
                                <Link
                                    key={page}
                                    to={`/${page.toLowerCase()}`}
                                    className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1"
                                >
                                    {page}
                                    <ArrowRight className="w-3 h-3" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
