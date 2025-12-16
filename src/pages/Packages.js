import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Zap, Building2, ArrowRight, Bot } from 'lucide-react';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
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
                    ? 'bg-gradient-to-r from-primary to-secondary shadow-glow-sm'
                    : 'bg-surface-light'
                    }`}
            >
                <motion.div
                    className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-lg"
                    animate={{ left: enabled ? '24px' : '4px' }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            </div>
            <span className={`text-sm font-medium transition-colors ${enabled ? 'text-primary' : 'text-text-secondary'}`}>
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
        <li className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(52,211,153,0.4)]">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-text-secondary">{children}</span>
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
                    ? 'bg-gradient-to-b from-primary/10 to-surface/80 border-2 border-primary/40'
                    : 'bg-white/5 border border-white/10'
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
                    <div className="bg-gradient-to-r from-primary to-secondary px-6 py-1.5 rounded-full text-sm font-semibold text-white shadow-glow-sm">
                        Most Popular
                    </div>
                </div>
            )}

            {/* Tier Badge */}
            <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${featured
                    ? 'bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/40'
                    : 'bg-surface-light border border-white/10'
                    }`}>
                    <Icon className={`w-6 h-6 ${featured ? 'text-primary' : 'text-secondary'}`} />
                </div>
                <div>
                    <p className="text-xs uppercase tracking-wider text-text-muted font-medium">{tier}</p>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
            </div>

            {/* Subtitle */}
            <p className="text-text-secondary text-sm mb-6">{subtitle}</p>

            {/* Price */}
            <div className="mb-8">
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold font-display text-white">
                        {typeof price === 'number' ? <AnimatedPrice value={price} suffix={priceSuffix} /> : price}
                    </span>
                </div>
                {priceNote && (
                    <p className="text-sm text-text-muted mt-1">{priceNote}</p>
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
                <div className="border-t border-white/10 pt-6 mb-6">
                    <p className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Power Add-ons
                    </p>
                    <div className="space-y-4">
                        {addons.map((addon, index) => (
                            <div key={index} className="bg-surface/50 rounded-xl p-4 border border-white/5">
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
                                            <p className="text-xs text-text-muted mb-2">{addon.description}</p>
                                            <p className="text-sm font-semibold text-primary">{addon.price}</p>
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
                        ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow'
                        : 'bg-surface-light border border-white/10 text-white hover:bg-surface hover:border-primary/30'
                    }
        `}
            >
                {cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-background-dark overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative z-10">
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <AnimatedItem>
                            <p className="text-primary font-medium tracking-widest uppercase mb-4">Pricing</p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
                                Tailored Solutions for Every{' '}
                                <span className="text-gradient">Stage of Growth</span>
                            </h1>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                                From rapid store launches to enterprise AI automation—choose the package that matches your ambition.
                            </p>
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
                                "Content management system (CMS)",
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
            <section className="section-padding bg-surface/30">
                <div className="container-custom">
                    <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <AnimatedItem>
                            <div className="p-8">
                                <div className="text-4xl font-bold text-gradient mb-2">150+</div>
                                <p className="text-text-secondary">Projects Delivered</p>
                            </div>
                        </AnimatedItem>
                        <AnimatedItem>
                            <div className="p-8">
                                <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                                <p className="text-text-secondary">Client Satisfaction</p>
                            </div>
                        </AnimatedItem>
                        <AnimatedItem>
                            <div className="p-8">
                                <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                                <p className="text-text-secondary">Years Combined Experience</p>
                            </div>
                        </AnimatedItem>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding">
                <div className="container-custom max-w-3xl">
                    <FadeUp>
                        <h2 className="text-3xl font-bold text-center text-white mb-12">
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
                                <div className="bg-surface/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                                    <p className="text-text-secondary text-sm">{faq.a}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-surface via-surface-light to-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative z-10">
                    <AnimatedSection className="text-center max-w-2xl mx-auto">
                        <AnimatedItem>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Not Sure Which Package is Right for You?
                            </h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-xl text-text-secondary mb-8">
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
