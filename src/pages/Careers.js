import React from 'react';
import { ArrowRight, Briefcase, Coffee, Globe, Heart, Laptop, MapPin, Sparkles, Users, Zap, GraduationCap, Clock, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

const Careers = () => {
    const benefits = [
        { icon: Laptop, title: "Remote-First", description: "Work from anywhere in the world" },
        { icon: Clock, title: "Flexible Hours", description: "Set your own schedule" },
        { icon: GraduationCap, title: "Learning Budget", description: "Annual training & conference allowance" },
        { icon: Heart, title: "Health Coverage", description: "Comprehensive health insurance" },
        { icon: Gift, title: "Performance Bonus", description: "Quarterly performance rewards" },
        { icon: Coffee, title: "Team Retreats", description: "Annual company gatherings" }
    ];

    const openPositions = [
        {
            title: "Senior Full-Stack Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Build scalable web applications using React, Node.js, and cloud technologies."
        },
        {
            title: "UI/UX Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
            description: "Create beautiful, user-centered designs for web and mobile applications."
        },
        {
            title: "AI/ML Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Develop and deploy machine learning solutions for enterprise clients."
        },
        {
            title: "Project Manager",
            department: "Operations",
            location: "Remote / Hybrid",
            type: "Full-time",
            description: "Lead cross-functional teams to deliver successful digital projects."
        },
        {
            title: "Digital Marketing Specialist",
            department: "Marketing",
            location: "Remote",
            type: "Full-time",
            description: "Drive growth through SEO, SEM, and social media strategies."
        }
    ];

    const culture = [
        {
            icon: Users,
            title: "Collaborative Team",
            description: "We work together across disciplines, sharing knowledge and supporting each other's growth."
        },
        {
            icon: Sparkles,
            title: "Innovation Driven",
            description: "We encourage experimentation and creative problem-solving in everything we do."
        },
        {
            icon: Globe,
            title: "Global Perspective",
            description: "Our diverse team brings unique perspectives from around the world."
        },
        {
            icon: Zap,
            title: "Fast-Paced Growth",
            description: "We move quickly, learn constantly, and celebrate wins together."
        }
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
                                Join Our Team
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="section-title text-slate-900 mb-6 leading-tight">
                                Build the Future <span className="text-blue-600">With Us</span>
                            </h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                Join a team of passionate innovators working on cutting-edge projects
                                that make a real impact.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <AnimatedItem>
                            <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Our Culture</p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h2 className="section-title text-slate-900 mb-6">
                                Why <span className="text-blue-600">Krinok?</span>
                            </h2>
                        </AnimatedItem>
                    </AnimatedSection>

                    <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerChildren={0.1}>
                        {culture.map((item, index) => (
                            <AnimatedItem key={index}>
                                <motion.div
                                    className="bg-white rounded-2xl p-6 text-center h-full border border-slate-100 shadow-md"
                                    whileHover={{ scale: 1.02, y: -5 }}
                                >
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.description}</p>
                                </motion.div>
                            </AnimatedItem>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <AnimatedItem>
                            <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Perks & Benefits</p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h2 className="section-title text-slate-900 mb-6">
                                What We <span className="text-blue-600">Offer</span>
                            </h2>
                        </AnimatedItem>
                    </AnimatedSection>

                    <AnimatedSection className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" staggerChildren={0.05}>
                        {benefits.map((benefit, index) => (
                            <AnimatedItem key={index}>
                                <motion.div
                                    className="text-center p-4"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <benefit.icon className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-sm mb-1">{benefit.title}</h3>
                                    <p className="text-slate-500 text-xs">{benefit.description}</p>
                                </motion.div>
                            </AnimatedItem>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <AnimatedItem>
                            <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Open Positions</p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h2 className="section-title text-slate-900 mb-6">
                                Current <span className="text-blue-600">Opportunities</span>
                            </h2>
                        </AnimatedItem>
                    </AnimatedSection>

                    <AnimatedSection className="max-w-4xl mx-auto space-y-4" staggerChildren={0.1}>
                        {openPositions.map((job, index) => (
                            <AnimatedItem key={index}>
                                <motion.div
                                    className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Briefcase className="w-5 h-5 text-blue-600" />
                                                <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                                            </div>
                                            <p className="text-slate-600 text-sm mb-3">{job.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                    {job.department}
                                                </span>
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" /> {job.location}
                                                </span>
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                                                    {job.type}
                                                </span>
                                            </div>
                                        </div>
                                        <MagneticButton to="/contact" variant="secondary" className="whitespace-nowrap">
                                            Apply Now
                                            <ArrowRight className="inline-block ml-2 w-4 h-4" />
                                        </MagneticButton>
                                    </div>
                                </motion.div>
                            </AnimatedItem>
                        ))}
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
                                Don't See the Right Role?
                            </h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                            </p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <MagneticButton to="/contact" className="!bg-white !text-blue-600 !bg-none shadow-xl shadow-white/10 hover:shadow-white/20">
                                Send Your Resume
                                <ArrowRight className="inline-block ml-2 w-4 h-4" />
                            </MagneticButton>
                        </AnimatedItem>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Careers;
