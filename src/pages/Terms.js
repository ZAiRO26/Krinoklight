import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { FadeUp } from '../components/AnimatedSection';

const Terms = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-white pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full filter blur-[120px]" />
                </div>
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <FadeUp>
                            <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-xl inline-block mb-6">
                                <FileText className="w-6 h-6 text-indigo-600" />
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="section-title text-slate-900 mb-4">Terms of Service</h1>
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
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Acceptance of Terms</h2>
                        <p className="text-slate-600 mb-6">
                            By accessing and using our services, you agree to be bound by these Terms of Service
                            and all applicable laws and regulations. If you do not agree with any of these terms,
                            you are prohibited from using or accessing our services.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Use License</h2>
                        <p className="text-slate-600 mb-6">
                            Permission is granted to temporarily access the materials on our website for personal,
                            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Disclaimer</h2>
                        <p className="text-slate-600 mb-6">
                            The materials on our website are provided on an 'as is' basis. We make no warranties,
                            expressed or implied, and hereby disclaim and negate all other warranties including,
                            without limitation, implied warranties or conditions of merchantability.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Limitations</h2>
                        <p className="text-slate-600 mb-6">
                            In no event shall Krinok or its suppliers be liable for any damages arising out
                            of the use or inability to use the materials on our website, even if we have been
                            notified of the possibility of such damage.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Governing Law</h2>
                        <p className="text-slate-600 mb-6">
                            These terms and conditions are governed by and construed in accordance with applicable
                            laws and you irrevocably submit to the exclusive jurisdiction of the courts.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Contact</h2>
                        <p className="text-slate-600">
                            For any questions regarding these Terms of Service, please contact us at{' '}
                            <a href="mailto:legal@Krinok.com" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                                legal@Krinok.com
                            </a>
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
