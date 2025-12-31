import React from 'react';
import { ArrowRight, Download, Mail, Newspaper, Calendar, Award, ExternalLink, FileText, Image, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

const Press = () => {
    const pressReleases = [
        {
            date: "December 2024",
            title: "Krinok Launches AI-Powered Development Solutions",
            description: "New suite of AI tools designed to accelerate software development for enterprise clients.",
            link: "#"
        },
        {
            date: "November 2024",
            title: "Krinok Expands Global Operations",
            description: "Opening new offices to serve growing demand in Europe and Asia-Pacific regions.",
            link: "#"
        },
        {
            date: "October 2024",
            title: "Partnership with Leading Cloud Provider Announced",
            description: "Strategic partnership to deliver enhanced cloud solutions for digital transformation.",
            link: "#"
        },
        {
            date: "September 2024",
            title: "Krinok Recognized as Top Digital Agency",
            description: "Industry recognition for excellence in innovation and client satisfaction.",
            link: "#"
        }
    ];

    const milestones = [
        { year: "2024", event: "Expanded to 20+ team members" },
        { year: "2024", event: "Launched AI Solutions Division" },
        { year: "2023", event: "50+ projects completed" },
        { year: "2023", event: "Recognized as Top Digital Agency" },
        { year: "2022", event: "Company founded in New Delhi" }
    ];

    const mediaAssets = [
        { icon: Image, title: "Logo Package", description: "High-res logos in various formats", size: "2.5 MB" },
        { icon: FileText, title: "Brand Guidelines", description: "Complete brand identity guide", size: "4.2 MB" },
        { icon: Image, title: "Team Photos", description: "Professional team photography", size: "15 MB" },
        { icon: Video, title: "Company Video", description: "Corporate overview video", size: "85 MB" }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full filter blur-[120px]"
                        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <FadeUp>
                            <p className="text-blue-600 font-medium tracking-widest uppercase mb-6">
                                Media Resources
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="section-title text-slate-900 mb-6 leading-tight">
                                Press <span className="text-blue-600">Office</span>
                            </h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                Find the latest news, press releases, and media resources about Krinok.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Press Contact */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedSection>
                            <AnimatedItem>
                                <motion.div
                                    className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-10 text-white"
                                    whileHover={{ scale: 1.01 }}
                                >
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                                                <Mail className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold">Media Inquiries</h3>
                                                <p className="text-white/80">For press and media requests, contact us at:</p>
                                                <a href="mailto:press@krinok.com" className="text-white font-medium hover:underline">
                                                    press@krinok.com
                                                </a>
                                            </div>
                                        </div>
                                        <MagneticButton to="/contact" className="bg-white text-blue-600 hover:bg-white/90">
                                            Contact Press Team
                                        </MagneticButton>
                                    </div>
                                </motion.div>
                            </AnimatedItem>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Press Releases */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <AnimatedItem>
                            <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Latest News</p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h2 className="section-title text-slate-900 mb-6">
                                Press <span className="text-blue-600">Releases</span>
                            </h2>
                        </AnimatedItem>
                    </AnimatedSection>

                    <AnimatedSection className="max-w-4xl mx-auto space-y-4" staggerChildren={0.1}>
                        {pressReleases.map((release, index) => (
                            <AnimatedItem key={index}>
                                <motion.a
                                    href={release.link}
                                    className="block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-all"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                                        <div className="flex items-center gap-3 text-slate-500 md:w-40 flex-shrink-0">
                                            <Calendar className="w-5 h-5 text-blue-600" />
                                            <span className="text-sm font-medium">{release.date}</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                                                {release.title}
                                                <ExternalLink className="w-4 h-4 text-blue-600" />
                                            </h3>
                                            <p className="text-slate-600 text-sm">{release.description}</p>
                                        </div>
                                    </div>
                                </motion.a>
                            </AnimatedItem>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* Media Kit */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <AnimatedItem>
                            <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Brand Assets</p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h2 className="section-title text-slate-900 mb-6">
                                Media <span className="text-blue-600">Kit</span>
                            </h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Download our official brand assets for editorial use.
                            </p>
                        </AnimatedItem>
                    </AnimatedSection>

                    <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" staggerChildren={0.1}>
                        {mediaAssets.map((asset, index) => (
                            <AnimatedItem key={index}>
                                <motion.div
                                    className="bg-white rounded-xl p-6 border border-slate-100 text-center hover:shadow-lg transition-shadow cursor-pointer"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <asset.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-1">{asset.title}</h3>
                                    <p className="text-slate-500 text-sm mb-3">{asset.description}</p>
                                    <div className="flex items-center justify-center gap-2 text-blue-600 text-sm font-medium">
                                        <Download className="w-4 h-4" />
                                        <span>{asset.size}</span>
                                    </div>
                                </motion.div>
                            </AnimatedItem>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* Milestones */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <AnimatedItem>
                            <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Our Journey</p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h2 className="section-title text-slate-900 mb-6">
                                Company <span className="text-blue-600">Milestones</span>
                            </h2>
                        </AnimatedItem>
                    </AnimatedSection>

                    <AnimatedSection className="max-w-2xl mx-auto">
                        <div className="relative">
                            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>
                            {milestones.map((milestone, index) => (
                                <AnimatedItem key={index}>
                                    <motion.div
                                        className={`relative flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                                            <Award className="w-5 h-5 text-white" />
                                        </div>
                                        <div className={`bg-slate-50 rounded-xl p-5 shadow-md border border-slate-100 flex-grow ml-4 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:w-5/12' : 'md:ml-auto md:w-5/12'}`}>
                                            <span className="text-blue-600 font-bold">{milestone.year}</span>
                                            <p className="text-slate-700 mt-1">{milestone.event}</p>
                                        </div>
                                    </motion.div>
                                </AnimatedItem>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.3)_0%,_transparent_70%)]" />
                </div>

                <div className="container-custom relative z-10">
                    <AnimatedSection className="text-center">
                        <AnimatedItem>
                            <h2 className="section-title text-white mb-6">
                                Want to Feature Krinok?
                            </h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                We'd love to share our story. Get in touch for interviews, quotes, or collaboration opportunities.
                            </p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <MagneticButton to="/contact" className="bg-white text-blue-600 hover:bg-white/90">
                                Contact Press Team
                                <ArrowRight className="inline-block ml-2 w-4 h-4" />
                            </MagneticButton>
                        </AnimatedItem>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Press;
