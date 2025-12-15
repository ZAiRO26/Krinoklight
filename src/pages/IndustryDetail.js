import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, ShoppingCart, Heart, GraduationCap, Home, Leaf } from 'lucide-react';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

const industriesData = {
    finance: {
        icon: TrendingUp,
        title: 'Finance',
        subtitle: 'Digital transformation for financial services and fintech leaders.',
        heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
        highlights: ['Fintech solutions', 'Payment systems', 'Risk & compliance'],
        gradient: 'from-blue-500 to-cyan-500',
        features: [
            'Modern mobile/web products for banking and payments',
            'Secure integrations with KYC/AML and regulatory workflows',
            'Analytics, reporting, and forecasting dashboards',
            'Scalable cloud foundations and observability',
            'Real-time transaction processing systems',
            'Fraud detection and prevention solutions',
        ],
    },
    commerce: {
        icon: ShoppingCart,
        title: 'Commerce',
        subtitle: 'E-commerce and retail experiences that convert and delight.',
        heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
        highlights: ['Storefront UX', 'Omnichannel', 'Performance & SEO'],
        gradient: 'from-orange-500 to-amber-500',
        features: [
            'High-converting storefronts and product catalogs',
            'Checkout, payments, logistics, and invoicing',
            'Site speed optimization and SEO best practices',
            'Customer analytics and lifecycle tactics',
            'Inventory and supply chain management',
            'Personalization and recommendation engines',
        ],
    },
    healthcare: {
        icon: Heart,
        title: 'Healthcare',
        subtitle: 'Digital health solutions built for safety, speed, and scale.',
        heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop',
        highlights: ['Telemedicine', 'Patient apps', 'Compliance'],
        gradient: 'from-rose-500 to-pink-500',
        features: [
            'HIPAA-aware patient portals and telemedicine platforms',
            'Medical device connectivity and secure data flows',
            'Scheduling, billing, and care-team collaboration tools',
            'Monitoring, analytics, and audit trails',
            'Electronic health records integration',
            'Clinical decision support systems',
        ],
    },
    education: {
        icon: GraduationCap,
        title: 'Education',
        subtitle: 'Learning platforms and tools that empower educators and students.',
        heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop',
        highlights: ['LMS', 'Content pipelines', 'Engagement'],
        gradient: 'from-violet-500 to-purple-500',
        features: [
            'Learning management systems and classroom apps',
            'Content creation, curation, and personalization',
            'Assessment workflows and progress tracking',
            'Accessibility and multi-device experiences',
            'Virtual and augmented reality learning',
            'Gamification and engagement mechanics',
        ],
    },
    proptech: {
        icon: Home,
        title: 'Proptech',
        subtitle: 'Property technology solutions for search, transactions, and operations.',
        heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
        highlights: ['Listings & search', 'Payments', 'Owner ops'],
        gradient: 'from-emerald-500 to-green-500',
        features: [
            'Property search UX with geospatial and rich media',
            'Unified payments and booking pipelines',
            'Owner and tenant portals with role-based access',
            'Data pipelines for valuation and forecasting',
            'Virtual tours and 3D property visualization',
            'Smart building and IoT integrations',
        ],
    },
    greentech: {
        icon: Leaf,
        title: 'Greentech',
        subtitle: 'Sustainable tech solutions for energy, climate, and operations.',
        heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop',
        highlights: ['Sensors & data', 'Optimization', 'Reporting'],
        gradient: 'from-teal-500 to-cyan-500',
        features: [
            'IoT sensors, telemetry, and dashboards',
            'Optimization algorithms for energy usage and routing',
            'Compliance reporting and stakeholder visualizations',
            'Scalable cloud data stores and APIs',
            'Carbon footprint tracking and reduction',
            'Renewable energy management systems',
        ],
    },
};

const IndustryDetail = () => {
    const { slug } = useParams();
    const ind = industriesData[slug];

    if (!ind) {
        return (
            <div className="min-h-screen bg-background-dark flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Industry Not Found</h1>
                    <p className="text-neutral-slate mb-8">The industry you're looking for doesn't exist.</p>
                    <MagneticButton to="/industries" variant="cta">
                        Browse All Industries
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </MagneticButton>
                </div>
            </div>
        );
    }

    const Icon = ind.icon;

    return (
        <div className="min-h-screen bg-background-dark">
            {/* Hero Section */}
            <section className="mesh-bg pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        className="absolute top-1/3 left-1/4 w-96 h-96 bg-navy-primary/30 rounded-full filter blur-[120px]"
                        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <FadeUp>
                            <div className={`icon-container mx-auto mb-6 bg-gradient-to-br ${ind.gradient}`}>
                                <Icon className="w-8 h-8 text-white" />
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="section-title text-white mb-4">{ind.title}</h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-xl text-neutral-slate mb-8">{ind.subtitle}</p>
                        </FadeUp>
                        <FadeUp delay={0.3}>
                            <div className="flex flex-wrap justify-center gap-3 mb-8">
                                {ind.highlights.map((h) => (
                                    <span key={h} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.4}>
                            <MagneticButton to="/contact" variant="cta">
                                Talk to Us
                                <ArrowRight className="inline-block ml-2 w-4 h-4" />
                            </MagneticButton>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section-padding bg-background-dark">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <AnimatedItem>
                            <h2 className="section-title text-white">
                                Our <span className="gradient-text">Expertise</span>
                            </h2>
                        </AnimatedItem>
                    </AnimatedSection>

                    <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerChildren={0.1}>
                        {ind.features.map((feature, idx) => (
                            <AnimatedItem key={idx}>
                                <motion.div
                                    className="glass-panel p-6 flex items-start gap-4"
                                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(75, 163, 218, 0.2)' }}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-navy-secondary flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-white/90 text-lg">{feature}</p>
                                </motion.div>
                            </AnimatedItem>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* Visual Banner */}
            <section className="relative h-[400px] overflow-hidden">
                <motion.img
                    src={ind.heroImage}
                    alt={ind.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-navy-primary via-navy-secondary to-accent-cyan relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
                </div>

                <div className="container-custom relative z-10">
                    <AnimatedSection className="text-center">
                        <AnimatedItem>
                            <h2 className="section-title text-white mb-6">
                                Let's Build for{' '}
                                <span className="text-background-dark">{ind.title}</span>
                            </h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                                Book a discovery call to outline a plan, timeline, and measurable outcomes.
                            </p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <MagneticButton to="/contact" className="bg-white text-navy-primary hover:bg-white/90">
                                Start a Project
                                <ArrowRight className="inline-block ml-2 w-4 h-4" />
                            </MagneticButton>
                        </AnimatedItem>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default IndustryDetail;
