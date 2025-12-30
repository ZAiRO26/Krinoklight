import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Zap, Building2, ArrowRight, Bot, Star, Shield, Clock, Users } from 'lucide-react';
import AnimatedSection, { AnimatedItem, FadeUp, FloatingElement } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

const Packages = () => {
    // State for interactive toggles
    const [tier1GrowthPack, setTier1GrowthPack] = useState(false);
    const [tier2AIAgent, setTier2AIAgent] = useState(false);
    const [tier2Maintenance, setTier2Maintenance] = useState(false);

    // Calculate dynamic prices
    const tier1Total = 25000 + (tier1GrowthPack ? 5000 : 0);
    const tier2Total = 30000 + (tier2AIAgent ? 15000 : 0) + (tier2Maintenance ? 1000 : 0);

    // iOS-style Toggle Component
    const Toggle = ({ enabled, onChange, label }) => (
        <button
            onClick={() => onChange(!enabled)}
            className="flex items-center gap-3 w-full group"
        >
            <div
                className={`relative w-12 h-7 rounded-full transition-all duration-300 ${enabled
                    ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-inner'
                    : 'bg-slate-200'
                    }`}
            >
                <motion.div
                    className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm"
                    animate={{ left: enabled ? '24px' : '4px' }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            </div>
            <span className={`text-sm font-medium transition-colors ${enabled ? 'text-indigo-600' : 'text-slate-600'}`}>
                {label}
            </span>
        </button>
    );

    // Animated Price Display
    const AnimatedPrice = ({ value, suffix = '', prefix = '₹' }) => (
        <motion.span
            key={value}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-block"
        >
            {prefix}{value.toLocaleString('en-IN')}{suffix}
        </motion.span>
    );

    // Feature Item Component
    const FeatureItem = ({ children }) => (
        <li className="flex items-start gap-3 group">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-white shadow-sm group-hover:scale-110 transition-transform">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
            </div>
            <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{children}</span>
        </li>
    );

    // Package Card Component
    const PackageCard = ({
        tier,
        title,
        subtitle,
        price,
        priceSuffix = '',
        priceNote,
        features,
        addons,
        cta,
        ctaLink,
        featured = false,
        icon: Icon
    }) => (
        <motion.div
            className={`relative rounded-3xl p-8 h-full flex flex-col
        ${featured
                    ? 'bg-white border-2 border-indigo-500 shadow-2xl shadow-indigo-100'
                    : 'bg-white border border-slate-200 shadow-xl shadow-slate-200/50'
                }
        backdrop-blur-lg
      `}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.02,
                borderColor: featured ? 'rgba(139, 92, 246, 0.6)' : 'rgba(6, 182, 212, 0.4)',
                boxShadow: featured
                    ? '0 0 40px rgba(139, 92, 246, 0.2)'
                    : '0 0 30px rgba(6, 182, 212, 0.15)'
            }}
            transition={{ duration: 0.3 }}
        >
            {/* Featured Badge */}
            {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <motion.div
                        className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-6 py-2 rounded-full text-sm font-bold text-white shadow-xl shadow-indigo-300/50 flex items-center gap-2"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                    </motion.div>
                </div>
            )}

            {/* Tier Badge */}
            <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${featured
                    ? 'bg-indigo-50'
                    : 'bg-slate-50 border border-slate-100'
                    }`}>
                    <Icon className={`w-6 h-6 ${featured ? 'text-indigo-600' : 'text-slate-500'}`} />
                </div>
                <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">{tier}</p>
                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                </div>
            </div>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">{subtitle}</p>

            <div className="mb-8">
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold font-display text-slate-900">
                        {typeof price === 'number' ? <AnimatedPrice value={price} suffix={priceSuffix} /> : price}
                    </span>
                </div>
                {priceNote && (
                    <p className="text-sm text-slate-500 mt-1 font-medium">{priceNote}</p>
                )}
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature, index) => (
                    <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
            </ul>

            {/* Add-ons Section */}
            {addons && addons.length > 0 && (
                <div className="border-t border-slate-200 pt-6 mb-6">
                    <p className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Power Add-ons
                    </p>
                    <div className="space-y-4">
                        {addons.map((addon, index) => (
                            <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                <div className="flex items-center justify-between mb-2">
                                    <Toggle
                                        enabled={addon.enabled}
                                        onChange={addon.onChange}
                                        label={addon.name}
                                    />
                                </div>
                                <AnimatePresence>
                                    {addon.enabled && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-3 pl-15"
                                        >
                                            <p className="text-xs text-slate-500 mb-2">{addon.description}</p>
                                            <p className="text-sm font-bold text-indigo-600">{addon.price}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* CTA Button */}
            <Link
                to={ctaLink || '/contact'}
                className={`w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 group
          ${featured
                        ? 'bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white hover:shadow-xl hover:shadow-indigo-300/50 hover:scale-[1.02]'
                        : 'bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 hover:border-indigo-400'
                    }
        `}
            >
                {cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-100/20 via-violet-100/20 to-purple-100/20 rounded-full blur-[80px]" />
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <FloatingElement className="absolute top-20 left-20" delay={0} amplitude={15}>
                        <div className="w-16 h-16 bg-indigo-100 rounded-2xl shadow-lg flex items-center justify-center">
                            <Zap className="w-8 h-8 text-indigo-500" />
                        </div>
                    </FloatingElement>
                    <FloatingElement className="absolute top-32 right-24" delay={0.5} amplitude={20}>
                        <div className="w-20 h-20 bg-violet-100 rounded-full shadow-lg flex items-center justify-center">
                            <Building2 className="w-10 h-10 text-violet-500" />
                        </div>
                    </FloatingElement>
                    <FloatingElement className="absolute bottom-32 left-32" delay={1} amplitude={12}>
                        <div className="w-14 h-14 bg-purple-100 rounded-xl shadow-lg flex items-center justify-center">
                            <Bot className="w-7 h-7 text-purple-500" />
                        </div>
                    </FloatingElement>
                </div>

                <div className="container-custom relative z-10">
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <AnimatedItem>
                            <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
                                <Sparkles className="w-4 h-4 text-indigo-600" />
                                <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">Transparent Pricing</span>
                            </div>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-8 leading-tight">
                                Tailored Solutions for Every{' '}
                                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Stage of Growth</span>
                            </h1>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                From rapid store launches to enterprise AI automation—choose the package that matches your ambition.
                            </p>
                        </AnimatedItem>

                        {/* Quick Trust Row */}
                        <AnimatedItem>
                            <div className="flex flex-wrap justify-center gap-8 mt-10">
                                {[
                                    { icon: Shield, text: "No Hidden Fees" },
                                    { icon: Clock, text: "Quick Delivery" },
                                    { icon: Users, text: "Dedicated Support" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-slate-500">
                                        <item.icon className="w-5 h-5 text-indigo-500" />
                                        <span className="font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedItem>
                    </AnimatedSection>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">

                        {/* Tier 1: Quick Commerce */}
                        <PackageCard
                            tier="Tier 1"
                            title="Quick Commerce"
                            subtitle="Rapid store setup for businesses ready to sell online immediately."
                            icon={Zap}
                            price={tier1Total}
                            priceNote="One-time investment"
                            features={[
                                "Complete Shopify or Shopichino store setup",
                                "Professional theme customization",
                                "Product catalog integration (up to 50 products)",
                                "Payment gateway setup",
                                "Mobile-responsive design",
                                "Basic SEO optimization",
                                "1 week delivery"
                            ]}
                            addons={[
                                {
                                    name: "Growth Pack",
                                    enabled: tier1GrowthPack,
                                    onChange: setTier1GrowthPack,
                                    description: "Meta Ads Management, FB/Insta Management, 3 Weekly Posts, 2 Reels, 3 Status Updates",
                                    price: "+₹5,000/month"
                                }
                            ]}
                            cta="Launch My Store"
                            ctaLink="/contact?package=quick-commerce"
                        />

                        {/* Tier 2: Professional Service Suite - Featured */}
                        <PackageCard
                            tier="Tier 2"
                            title="Professional Service Suite"
                            subtitle="Custom development for manufacturing, furniture, artists & event planners."
                            icon={Building2}
                            price={tier2Total}
                            priceNote={tier2Maintenance ? "One-time + ₹1,000/mo" : "One-time investment"}
                            featured={true}
                            features={[
                                "Fully custom website development",
                                "Industry-specific design & UX",
                                "Advanced contact forms & lead capture",
                                "Portfolio/Gallery showcase",
                                "Google Analytics & tracking setup",
                                "3 months free support"
                            ]}
                            addons={[
                                {
                                    name: "AI Sales Agent",
                                    enabled: tier2AIAgent,
                                    onChange: setTier2AIAgent,
                                    description: "24/7 AI-powered chatbot for lead generation, customer support & chat transcripts",
                                    price: "+₹15,000 one-time"
                                },
                                {
                                    name: "Maintenance Lite",
                                    enabled: tier2Maintenance,
                                    onChange: setTier2Maintenance,
                                    description: "Up to 5 content/design changes per month with priority support",
                                    price: "+₹1,000/month"
                                }
                            ]}
                            cta="Start My Project"
                            ctaLink="/contact?package=professional-suite"
                        />

                        {/* Tier 3: Enterprise AI */}
                        <PackageCard
                            tier="Tier 3"
                            title="Enterprise AI & Automation"
                            subtitle="High-scale solutions for businesses ready to leverage AI & automation."
                            icon={Bot}
                            price="₹1,00,000+"
                            priceNote="Custom pricing based on scope"
                            features={[
                                "Custom application development",
                                "Agentic AI solutions & integration",
                                "AI automation workflows",
                                "Enterprise-grade security",
                                "Dedicated project manager",
                                "API integrations & data pipelines",
                                "Ongoing strategic partnership",
                                "Priority 24/7 support"
                            ]}
                            cta="Request Custom Consultation"
                            ctaLink="/contact?package=enterprise"
                        />

                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
                </div>

                <div className="container-custom relative z-10">
                    <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { value: "50+", label: "Projects Delivered", icon: Zap },
                            { value: "98%", label: "Client Satisfaction", icon: Star },
                            { value: "15+", label: "Years Combined Experience", icon: Users }
                        ].map((stat, idx) => (
                            <AnimatedItem key={idx}>
                                <motion.div
                                    className="p-8 bg-white border border-slate-100 rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-xl flex items-center justify-center">
                                        <stat.icon className="w-7 h-7 text-indigo-600" />
                                    </div>
                                    <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-3">{stat.value}</div>
                                    <p className="text-slate-600 font-medium">{stat.label}</p>
                                </motion.div>
                            </AnimatedItem>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding">
                <div className="container-custom max-w-3xl">
                    <FadeUp>
                        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                            Frequently Asked Questions
                        </h2>
                    </FadeUp>

                    <div className="space-y-4">
                        {[
                            {
                                q: "What's included in the one-time price?",
                                a: "All one-time packages include complete development, design, deployment, and handover. You own everything we create for you."
                            },
                            {
                                q: "Can I upgrade my package later?",
                                a: "Absolutely! Many clients start with Quick Commerce and upgrade to Professional Suite as they grow. We make transitions seamless."
                            },
                            {
                                q: "What if I need something not listed here?",
                                a: "Our Enterprise tier is fully customizable. Contact us for a free consultation and we'll design a solution tailored to your needs."
                            },
                            {
                                q: "Do you offer payment plans?",
                                a: "Yes, we offer flexible payment options for all packages. Typically 50% upfront and 50% on delivery."
                            }
                        ].map((faq, index) => (
                            <FadeUp key={index} delay={index * 0.1}>
                                <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative z-10">
                    <AnimatedSection className="text-center max-w-2xl mx-auto">
                        <AnimatedItem>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Not Sure Which Package is Right for You?
                            </h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-xl text-slate-600 mb-8">
                                Let's have a quick chat. We'll understand your needs and recommend the perfect solution.
                            </p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <MagneticButton to="/contact" variant="cta">
                                Schedule a Free Consultation
                                <ArrowRight className="inline-block ml-2 w-5 h-5" />
                            </MagneticButton>
                        </AnimatedItem>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Packages;
