import React from 'react';
import { ArrowRight, Lightbulb, Palette, Code, Rocket, CheckCircle, Users, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

const HowWeWork = () => {
    const phases = [
        {
            number: "01",
            title: "Discovery & Strategy",
            description: "We start by deeply understanding your business, goals, and challenges. Through workshops and research, we define the project scope, user personas, and success metrics.",
            icon: Lightbulb,
            color: "blue",
            items: ["Stakeholder interviews", "Market research", "Competitive analysis", "Project roadmap"]
        },
        {
            number: "02",
            title: "Design & Prototyping",
            description: "Our designers create user-centered interfaces that are both beautiful and functional. We iterate rapidly with prototypes to ensure the solution meets your vision.",
            icon: Palette,
            color: "cyan",
            items: ["Wireframing", "UI/UX design", "Interactive prototypes", "User testing"]
        },
        {
            number: "03",
            title: "Development & Testing",
            description: "Our engineers build robust, scalable solutions using modern technologies. We follow agile practices with regular demos and continuous testing.",
            icon: Code,
            color: "blue",
            items: ["Agile sprints", "Code reviews", "Automated testing", "Quality assurance"]
        },
        {
            number: "04",
            title: "Launch & Support",
            description: "We ensure a smooth launch with comprehensive training and documentation. Our ongoing support keeps your solution running optimally.",
            icon: Rocket,
            color: "cyan",
            items: ["Deployment", "Training & docs", "24/7 monitoring", "Continuous improvement"]
        }
    ];

    const principles = [
        {
            icon: Users,
            title: "Client Partnership",
            description: "We work as an extension of your team, maintaining transparent communication and shared goals throughout the project."
        },
        {
            icon: MessageSquare,
            title: "Agile Methodology",
            description: "Our iterative approach allows for flexibility and rapid adaptation to changing requirements and market conditions."
        },
        {
            icon: CheckCircle,
            title: "Quality First",
            description: "We never compromise on quality. Every line of code is reviewed, tested, and optimized for performance."
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
                                Our Process
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="section-title text-slate-900 mb-6 leading-tight">
                                How We <span className="text-blue-600">Work</span>
                            </h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                From concept to launch, we follow a proven methodology that ensures
                                successful outcomes and delighted clients.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <AnimatedSection className="space-y-12">
                        {phases.map((phase, index) => (
                            <AnimatedItem key={index}>
                                <motion.div
                                    className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                        {/* Phase Number */}
                                        <div className="lg:col-span-2 flex items-center gap-4 lg:flex-col lg:items-start">
                                            <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent`}>
                                                {phase.number}
                                            </div>
                                            <div className={`w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center`}>
                                                <phase.icon className="w-7 h-7 text-blue-600" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="lg:col-span-6">
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                                        </div>

                                        {/* Checklist */}
                                        <div className="lg:col-span-4">
                                            <ul className="space-y-3">
                                                {phase.items.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3">
                                                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                                        <span className="text-slate-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatedItem>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* Principles Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <AnimatedItem>
                            <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Our Principles</p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h2 className="section-title text-slate-900 mb-6">
                                What Drives <span className="text-blue-600">Us</span>
                            </h2>
                        </AnimatedItem>
                    </AnimatedSection>

                    <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerChildren={0.1}>
                        {principles.map((principle, index) => (
                            <AnimatedItem key={index}>
                                <motion.div
                                    className="bg-slate-50 rounded-2xl p-8 text-center h-full border border-slate-100"
                                    whileHover={{ scale: 1.02, y: -5 }}
                                >
                                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                        <principle.icon className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{principle.title}</h3>
                                    <p className="text-slate-600">{principle.description}</p>
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
                                Ready to Start Your Project?
                            </h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                Let's discuss how our proven process can bring your vision to life.
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

export default HowWeWork;
