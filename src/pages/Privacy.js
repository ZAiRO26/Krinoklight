import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { FadeUp } from '../components/AnimatedSection';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-white pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full filter blur-[120px]" />
                </div>
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <FadeUp>
                            <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl inline-block mb-6">
                                <Shield className="w-6 h-6 text-blue-600" />
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="section-title text-slate-900 mb-4">Privacy Policy</h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-slate-600">Last updated: December 2024</p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom max-w-4xl">
                    <motion.div
                        className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Information We Collect</h2>
                        <p className="text-slate-600 mb-6">
                            We collect information you provide directly to us, such as when you create an account,
                            make a purchase, or contact us for support. This may include your name, email address,
                            phone number, and any other information you choose to provide.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mb-6">2. How We Use Your Information</h2>
                        <p className="text-slate-600 mb-6">
                            We use the information we collect to provide, maintain, and improve our services,
                            to process transactions and send related information, and to communicate with you
                            about products, services, and events.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Information Sharing</h2>
                        <p className="text-slate-600 mb-6">
                            We do not sell, trade, or otherwise transfer your personal information to third parties
                            without your consent, except as described in this policy or as required by law.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Data Security</h2>
                        <p className="text-slate-600 mb-6">
                            We implement appropriate technical and organizational measures to protect your personal
                            information against unauthorized access, alteration, disclosure, or destruction.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Your Rights</h2>
                        <p className="text-slate-600 mb-6">
                            You have the right to access, correct, or delete your personal information.
                            You may also have the right to restrict or object to certain processing of your data.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Contact Us</h2>
                        <p className="text-slate-600">
                            If you have any questions about this Privacy Policy, please contact us at{' '}
                            <a href="mailto:privacy@Krinok.com" className="text-blue-600 hover:text-indigo-800 transition-colors">
                                privacy@Krinok.com
                            </a>
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
