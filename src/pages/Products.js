import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Megaphone, Target, Camera, ShoppingCart, Users, Lightbulb, Briefcase, Gift, Palette, Calendar, Scale, Heart, BarChart3, Wallet, FileText, Sparkles } from 'lucide-react';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

const Products = () => {
    // All products/services organized by category
    const categories = [
        {
            name: 'Development Services',
            description: 'Custom software solutions built for your needs',
            products: [
                {
                    id: 'app-development',
                    icon: Code,
                    title: 'App Development',
                    description: 'Custom mobile and web apps built for industrial operations',
                    features: ['iOS/Android apps', 'Web applications', 'Cloud-native architectures'],
                    gradient: 'from-blue-500 to-cyan-500',
                },
                {
                    id: 'ecommerce',
                    icon: ShoppingCart,
                    title: 'E-commerce Solutions',
                    description: 'High-converting storefronts tailored to your business',
                    features: ['Storefront design', 'Payment integrations', 'Inventory management'],
                    gradient: 'from-green-500 to-emerald-500',
                },
                {
                    id: 'business-websites',
                    icon: Briefcase,
                    title: 'Business Websites',
                    description: 'Professional websites tailored for your business growth',
                    features: ['Lead capture', 'SEO optimization', 'Analytics integration'],
                    gradient: 'from-slate-500 to-zinc-600',
                },
            ]
        },
        {
            name: 'Marketing Services',
            description: 'Grow your brand and reach more customers',
            products: [
                {
                    id: 'social-media-marketing',
                    icon: Megaphone,
                    title: 'Social Media Marketing',
                    description: 'Content, scheduling, and account management',
                    features: ['Content creation', 'Audience growth', 'Monthly analytics'],
                    gradient: 'from-orange-500 to-rose-500',
                },
                {
                    id: 'meta-instagram-ads',
                    icon: Target,
                    title: 'Meta/Instagram Ads',
                    description: 'Targeted campaigns that drive qualified leads',
                    features: ['Audience targeting', 'Creative production', 'A/B testing'],
                    gradient: 'from-pink-500 to-purple-500',
                },
                {
                    id: 'instagram-virtual-avatars',
                    icon: Users,
                    title: 'Virtual Avatars',
                    description: 'Engaging digital personas for campaigns',
                    features: ['Avatar design', 'Content pipelines', 'Brand storytelling'],
                    gradient: 'from-violet-500 to-indigo-500',
                },
                {
                    id: 'virtual-ai-product-photography',
                    icon: Sparkles,
                    title: 'AI Product Photography',
                    description: 'Studio-grade imagery generated with AI',
                    features: ['Background removal', 'Bulk processing', 'Brand consistency'],
                    gradient: 'from-amber-500 to-orange-500',
                },
            ]
        },
        {
            name: 'Creative Professionals',
            description: 'Show off your talent with stunning portfolio websites',
            products: [
                {
                    id: 'photographers',
                    icon: Camera,
                    title: 'Photographers',
                    description: 'Showcase your photography with a stunning portfolio',
                    features: ['Gallery displays', 'Client proofing', 'Booking forms'],
                    gradient: 'from-gray-600 to-gray-800',
                },
                {
                    id: 'makeup-artists',
                    icon: Palette,
                    title: 'Makeup Artists',
                    description: 'Exhibit your artistry and attract new clients',
                    features: ['Lookbook galleries', 'Service listings', 'Testimonials'],
                    gradient: 'from-pink-400 to-rose-500',
                },
                {
                    id: 'wedding-planners',
                    icon: Calendar,
                    title: 'Wedding Planners',
                    description: 'Display your portfolio and wedding packages',
                    features: ['Event galleries', 'Package listings', 'Vendor directories'],
                    gradient: 'from-rose-400 to-pink-500',
                },
                {
                    id: 'event-planners',
                    icon: Calendar,
                    title: 'Event Planners',
                    description: 'Promote your event planning services',
                    features: ['Case studies', 'Pricing tables', 'Discovery forms'],
                    gradient: 'from-purple-400 to-violet-500',
                },
            ]
        },
        {
            name: 'Professional Services',
            description: 'Build credibility and attract high-value clients',
            products: [
                {
                    id: 'lawyers',
                    icon: Scale,
                    title: 'Lawyers',
                    description: 'Professional website that highlights your expertise',
                    features: ['Practice areas', 'Case results', 'Intake forms'],
                    gradient: 'from-slate-600 to-gray-700',
                },
                {
                    id: 'business-consultants',
                    icon: BarChart3,
                    title: 'Business Consultants',
                    description: 'Present your expertise and consulting services',
                    features: ['Case studies', 'ROI stories', 'Resource library'],
                    gradient: 'from-blue-600 to-indigo-600',
                },
                {
                    id: 'investment-consultants',
                    icon: Wallet,
                    title: 'Investment Consultants',
                    description: 'Share your financial advisory services',
                    features: ['Service packages', 'Performance charts', 'Secure scheduling'],
                    gradient: 'from-emerald-600 to-teal-600',
                },
                {
                    id: 'yoga-teachers',
                    icon: Heart,
                    title: 'Yoga Teachers',
                    description: 'Connect with students and share your practice',
                    features: ['Class schedules', 'Retreat listings', 'Newsletter signup'],
                    gradient: 'from-teal-400 to-cyan-500',
                },
            ]
        },
        {
            name: 'Personal & Events',
            description: 'Make your special moments memorable',
            products: [
                {
                    id: 'digital-invitations',
                    icon: Gift,
                    title: 'Digital Invitations',
                    description: 'Beautiful invitations for your special moments',
                    features: ['RSVP tracking', 'Social sharing', 'Guest management'],
                    gradient: 'from-rose-500 to-pink-500',
                },
                {
                    id: 'online-resume',
                    icon: FileText,
                    title: 'Online Resume',
                    description: 'Stand out with a professional online resume',
                    features: ['Skills showcase', 'PDF export', 'Contact forms'],
                    gradient: 'from-cyan-500 to-blue-500',
                },
                {
                    id: 'idea-to-go-live',
                    icon: Lightbulb,
                    title: 'Custom Projects',
                    description: 'End-to-end project management from concept to launch',
                    features: ['Discovery workshops', 'MVP planning', 'Launch support'],
                    gradient: 'from-amber-400 to-yellow-500',
                },
            ]
        },
    ];

    // Flatten products for count
    const allProducts = categories.flatMap(cat => cat.products);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full filter blur-[120px]" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <FadeUp>
                            <p className="text-indigo-600 font-medium tracking-widest uppercase mb-6">
                                Our Products & Services
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="section-title text-slate-900 mb-6 leading-tight">
                                <span className="text-indigo-600">{allProducts.length}+</span> Solutions for Every Client
                            </h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                From entrepreneurs to enterprises, we have the perfect digital solution for your needs. Explore our comprehensive range of products and services.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Products by Category */}
            {categories.map((category, catIndex) => (
                <section
                    key={category.name}
                    className={`section-padding ${catIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
                >
                    <div className="container-custom">
                        <AnimatedSection className="mb-12">
                            <AnimatedItem>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                    {category.name}
                                </h2>
                                <p className="text-slate-600 text-lg">{category.description}</p>
                            </AnimatedItem>
                        </AnimatedSection>

                        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" staggerChildren={0.08}>
                            {category.products.map((product) => (
                                <AnimatedItem key={product.id}>
                                    <Link
                                        to={`/services/${product.id}`}
                                        className="group block h-full"
                                    >
                                        <div className="bg-white p-6 h-full flex flex-col rounded-2xl border border-slate-200 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1">
                                            {/* Icon */}
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 shadow-sm`}>
                                                <product.icon className="w-6 h-6 text-white" />
                                            </div>

                                            {/* Title & Description */}
                                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                                                {product.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm mb-4 flex-grow">
                                                {product.description}
                                            </p>

                                            {/* Features */}
                                            <ul className="space-y-2 mb-4">
                                                {product.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center text-slate-500 text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* CTA */}
                                            <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                                                <span>Learn more</span>
                                                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedItem>
                            ))}
                        </AnimatedSection>
                    </div>
                </section>
            ))}

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
                </div>

                <div className="container-custom relative z-10">
                    <AnimatedSection className="text-center">
                        <AnimatedItem>
                            <h2 className="section-title text-white mb-6">
                                Don't See What You Need?
                            </h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                                We build custom solutions for unique business challenges. Let's discuss your project.
                            </p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <MagneticButton to="/contact" className="bg-white text-indigo-900 hover:bg-white/90">
                                Get a Custom Quote
                                <ArrowRight className="inline-block ml-2 w-4 h-4" />
                            </MagneticButton>
                        </AnimatedItem>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Products;
