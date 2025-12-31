import React from 'react';
import { ArrowRight, Leaf, Cloud, Recycle, Globe, Zap, Heart, TreePine, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

const Sustainability = () => {
    const initiatives = [
        {
            icon: Cloud,
            title: "Green Cloud Hosting",
            description: "We partner with carbon-neutral cloud providers and optimize our infrastructure for energy efficiency.",
            stat: "100%",
            statLabel: "Renewable Energy"
        },
        {
            icon: Recycle,
            title: "Paperless Operations",
            description: "Our digital-first approach eliminates paper waste across all operations and client deliverables.",
            stat: "Zero",
            statLabel: "Paper Waste"
        },
        {
            icon: Globe,
            title: "Remote-First Culture",
            description: "By embracing remote work, we reduce commuting emissions and support work-life balance.",
            stat: "80%",
            statLabel: "Carbon Reduction"
        },
        {
            icon: Zap,
            title: "Efficient Code Practices",
            description: "Our optimized codebases reduce server load and energy consumption across client applications.",
            stat: "40%",
            statLabel: "Less Server Load"
        }
    ];

    const commitments = [
        {
            title: "Carbon Neutrality",
            description: "We offset our remaining carbon footprint through verified environmental projects.",
            icon: TreePine
        },
        {
            title: "Sustainable Partnerships",
            description: "We prioritize vendors and partners who share our commitment to environmental responsibility.",
            icon: Building
        },
        {
            title: "Community Impact",
            description: "We contribute a portion of our profits to environmental conservation and local community initiatives.",
            icon: Heart
        }
    ];

    const goals = [
        { year: "2024", goal: "Carbon neutral operations" },
        { year: "2025", goal: "100% renewable energy for all client projects" },
        { year: "2026", goal: "Zero waste certification" },
        { year: "2027", goal: "B Corp certification" }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full filter blur-[120px]"
                        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <FadeUp>
                            <p className="text-blue-600 font-medium tracking-widest uppercase mb-6">
                                Our Commitment
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="section-title text-slate-900 mb-6 leading-tight">
                                Building a <span className="text-blue-600">Sustainable</span> Future
                            </h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                We believe technology should be a force for good. Our commitment to sustainability
                                guides every decision we make.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Initiatives Grid */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <AnimatedItem>
                            <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Our Initiatives</p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h2 className="section-title text-slate-900 mb-6">
                                Sustainable <span className="text-blue-600">Practices</span>
                            </h2>
                        </AnimatedItem>
                    </AnimatedSection>

                    <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerChildren={0.1}>
                        {initiatives.map((initiative, index) => (
                            <AnimatedItem key={index}>
                                <motion.div
                                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 h-full"
                                    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <initiative.icon className="w-7 h-7 text-blue-600" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{initiative.title}</h3>
                                            <p className="text-slate-600 mb-4">{initiative.description}</p>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                                    {initiative.stat}
                                                </span>
                                                <span className="text-slate-500 text-sm">{initiative.statLabel}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatedItem>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* Commitments Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <AnimatedItem>
                            <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Beyond Operations</p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h2 className="section-title text-slate-900 mb-6">
                                Our <span className="text-blue-600">Commitments</span>
                            </h2>
                        </AnimatedItem>
                    </AnimatedSection>

                    <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerChildren={0.1}>
                        {commitments.map((commitment, index) => (
                            <AnimatedItem key={index}>
                                <motion.div
                                    className="bg-slate-50 rounded-2xl p-8 text-center h-full border border-slate-100"
                                    whileHover={{ scale: 1.02, y: -5 }}
                                >
                                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                        <commitment.icon className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{commitment.title}</h3>
                                    <p className="text-slate-600">{commitment.description}</p>
                                </motion.div>
                            </AnimatedItem>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* Roadmap Section */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <AnimatedItem>
                            <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Our Journey</p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h2 className="section-title text-slate-900 mb-6">
                                Sustainability <span className="text-blue-600">Roadmap</span>
                            </h2>
                        </AnimatedItem>
                    </AnimatedSection>

                    <AnimatedSection className="max-w-3xl mx-auto">
                        <div className="relative">
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                            {goals.map((goal, index) => (
                                <AnimatedItem key={index}>
                                    <motion.div
                                        className="relative flex items-center gap-6 mb-8"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-16 h-16 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center z-10 shadow-lg">
                                            <Leaf className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 flex-grow">
                                            <span className="text-blue-600 font-bold text-lg">{goal.year}</span>
                                            <p className="text-slate-700 mt-1">{goal.goal}</p>
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
                                Join Us in Building a Greener Future
                            </h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                Partner with a company that cares about the planet as much as your success.
                            </p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <MagneticButton to="/contact" className="!bg-white !text-blue-600 !bg-none shadow-xl shadow-white/10 hover:shadow-white/20">
                                Get in Touch
                                <ArrowRight className="inline-block ml-2 w-4 h-4" />
                            </MagneticButton>
                        </AnimatedItem>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Sustainability;
