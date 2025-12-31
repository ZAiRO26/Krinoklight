import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Code, Megaphone, Target, Camera, ShoppingCart, Users, Lightbulb, Briefcase, Gift, Palette, Calendar, Scale, Heart, BarChart3, Wallet, FileText } from 'lucide-react';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

// Slug mapping for different URL patterns
const slugMap = {
    'software-development': 'development',
    'generative-ai-and-data': 'ai',
    'cooperation-models': 'cooperation',
};

const servicesData = {
    'ideation': {
        icon: Lightbulb,
        title: 'Ideation',
        subtitle: 'Identify, shape and validate your product idea with strategic planning.',
        heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
        highlights: ['Product strategy', 'Market research', 'MVP planning'],
        gradient: 'from-amber-500 to-orange-500',
        features: [
            'Product strategy and roadmap development',
            'Market research and competitive analysis',
            'User research and persona creation',
            'MVP definition and feature prioritization',
            'Business model canvas development',
            'Technical feasibility assessment',
        ],
    },
    'development': {
        icon: Code,
        title: 'Software Development',
        subtitle: 'Bring products to life with world-class engineering and modern technologies.',
        heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
        highlights: ['Web & Mobile', 'Cloud native', 'API development'],
        gradient: 'from-blue-500 to-cyan-500',
        features: [
            'Full-stack web and mobile development',
            'Cloud-native architectures (AWS, GCP, Azure)',
            'API development and third-party integrations',
            'DevOps, CI/CD, and infrastructure automation',
            'Quality assurance and automated testing',
            'Performance optimization and scaling',
        ],
    },
    'design': {
        icon: Palette,
        title: 'Design',
        subtitle: 'Craft beautiful digital experiences that users love across all platforms.',
        heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
        highlights: ['UI/UX', 'Design systems', 'Prototyping'],
        gradient: 'from-pink-500 to-rose-500',
        features: [
            'User experience (UX) research and design',
            'User interface (UI) design and visual design',
            'Design systems and component libraries',
            'Interactive prototyping and user testing',
            'Brand identity and style guides',
            'Accessibility and inclusive design',
        ],
    },
    'ai': {
        icon: BarChart3,
        title: 'Generative AI and Data',
        subtitle: 'Leverage AI to transform your business processes and unlock insights.',
        heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
        highlights: ['AI strategy', 'Machine learning', 'Data analytics'],
        gradient: 'from-violet-500 to-purple-500',
        features: [
            'AI strategy and implementation roadmap',
            'Machine learning model development',
            'Natural language processing solutions',
            'Computer vision and image recognition',
            'Data analytics and business intelligence',
            'AI-powered automation and optimization',
        ],
    },
    'maintenance': {
        icon: CheckCircle2,
        title: 'Maintenance',
        subtitle: 'Safeguard your product quality and reliability with ongoing support.',
        heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
        highlights: ['24/7 support', 'Security updates', 'Performance'],
        gradient: 'from-emerald-500 to-green-500',
        features: [
            'Application monitoring and observability',
            'Performance optimization and tuning',
            'Security patches and vulnerability fixes',
            'Bug fixes and issue resolution',
            'Infrastructure management and scaling',
            'Regular health checks and reporting',
        ],
    },
    'cooperation': {
        icon: Users,
        title: 'Cooperation Models',
        subtitle: 'Choose the collaboration model that fits your needs and scale.',
        heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
        highlights: ['Dedicated teams', 'Staff augmentation', 'Project-based'],
        gradient: 'from-sky-500 to-blue-500',
        features: [
            'Dedicated development teams',
            'Staff augmentation and team extension',
            'Project-based fixed-price engagements',
            'Technical consulting and advisory',
            'Agile development methodology',
            'Flexible scaling and resource allocation',
        ],
    },
    'app-development': {
        icon: Code,
        title: 'App Development',
        subtitle: 'Custom mobile and web applications engineered for performance and scale.',
        heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
        highlights: ['iOS/Android', 'Responsive Web', 'Cloud-native'],
        gradient: 'from-blue-500 to-cyan-500',
        features: [
            'Native iOS and Android development',
            'Cross-platform development (React Native, Flutter)',
            'Progressive Web Apps (PWA)',
            'Backend API development and integrations',
            'Cloud infrastructure and DevOps',
            'Testing, deployment, and maintenance',
        ],
    },
    'social-media-marketing': {
        icon: Megaphone,
        title: 'Social Media Marketing',
        subtitle: 'Content and account management designed to grow your brand presence.',
        heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
        highlights: ['Content strategy', 'Community', 'Analytics'],
        gradient: 'from-orange-500 to-rose-500',
        features: [
            'Social media strategy and planning',
            'Content creation and curation',
            'Community management and engagement',
            'Editorial calendars and scheduling',
            'Analytics and performance reporting',
            'Influencer partnerships and campaigns',
        ],
    },
    'meta-instagram-ads': {
        icon: Target,
        title: 'Meta/Instagram Ads',
        subtitle: 'Targeted campaigns focusing on qualified leads and conversions.',
        heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop',
        highlights: ['Audience targeting', 'Creative testing', 'Conversion tracking'],
        gradient: 'from-pink-500 to-purple-500',
        features: [
            'Pixel setup and event tracking',
            'Audience segmentation and lookalikes',
            'Creative production and A/B testing',
            'Budget optimization and bidding strategies',
            'Performance dashboards and reporting',
            'Retargeting and remarketing campaigns',
        ],
    },
    'ecommerce': {
        icon: ShoppingCart,
        title: 'E-commerce Solutions',
        subtitle: 'High-converting storefronts tailored for your business.',
        heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
        highlights: ['Storefront UX', 'Payments', 'SEO'],
        gradient: 'from-green-500 to-emerald-500',
        features: [
            'Custom e-commerce storefront design',
            'Product catalog and inventory management',
            'Payment gateway integrations',
            'Shipping and fulfillment automation',
            'SEO and performance optimization',
            'Analytics and conversion tracking',
        ],
    },
    'business-websites': {
        icon: Briefcase,
        title: 'Business Websites',
        subtitle: 'Professional websites engineered for growth and credibility.',
        heroImage: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&h=600&fit=crop',
        highlights: ['Lead capture', 'SEO optimized', 'Fast loading'],
        gradient: 'from-slate-500 to-zinc-500',
        features: [
            'Information architecture and content strategy',
            'Modern, responsive UI with performance focus',
            'Lead forms with CRM integration',
            'On-page SEO and accessibility',
            'Analytics and tracking setup',
            'Ongoing maintenance and updates',
        ],
    },
    'digital-invitations': {
        icon: Gift,
        title: 'Digital Invitations',
        subtitle: 'Elegant digital invites with RSVP, sharing, and tracking.',
        heroImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop',
        highlights: ['RSVP', 'Shareable', 'Templates'],
        gradient: 'from-rose-500 to-pink-500',
        features: [
            'Customizable themes and typography',
            'Guest lists and RSVP management',
            'Social sharing and email distribution',
            'Response tracking and analytics',
            'Multiple event type templates',
            'Mobile-responsive designs',
        ],
    },
    'photographers': {
        icon: Camera,
        title: 'Photographers',
        subtitle: 'Showcase your photography portfolio with a stunning website.',
        heroImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=1200&h=600&fit=crop',
        highlights: ['Portfolio galleries', 'Client proofing', 'Booking forms'],
        gradient: 'from-gray-600 to-gray-800',
        features: [
            'Responsive gallery displays and albums',
            'Client proofing and download portals',
            'Booking inquiries and contact forms',
            'Watermarking and image optimization',
            'SEO-ready portfolio pages',
            'Social media integration',
        ],
    },
    'makeup-artists': {
        icon: Palette,
        title: 'Makeup Artists',
        subtitle: 'Exhibit your artistry and attract new clients.',
        heroImage: 'https://images.unsplash.com/photo-1512499617640-c2f999098c32?w=1200&h=600&fit=crop',
        highlights: ['Lookbook galleries', 'Service listings', 'Testimonials'],
        gradient: 'from-pink-400 to-rose-500',
        features: [
            'Portfolio showcases and lookbooks',
            'Service listings with pricing',
            'Client testimonials and reviews',
            'Booking forms and calendars',
            'Instagram-friendly sharing',
            'Mobile-optimized experience',
        ],
    },
    'wedding-planners': {
        icon: Calendar,
        title: 'Wedding Planners',
        subtitle: 'Display your portfolio and wedding packages.',
        heroImage: 'https://images.unsplash.com/photo-1511909525232-1829e6e6e3c0?w=1200&h=600&fit=crop',
        highlights: ['Event galleries', 'Package listings', 'Vendor directories'],
        gradient: 'from-rose-400 to-pink-500',
        features: [
            'Service packages and inclusions',
            'Event galleries and success stories',
            'Inquiry pipelines and contact forms',
            'Vendor listings and partner pages',
            'Blog and planning resources',
            'Newsletter and lead capture',
        ],
    },
    'event-planners': {
        icon: Calendar,
        title: 'Event Planners',
        subtitle: 'Promote your event planning services professionally.',
        heroImage: 'https://images.unsplash.com/photo-1519671482749-f31cae0c1f4f?w=1200&h=600&fit=crop',
        highlights: ['Case studies', 'Pricing tables', 'Discovery forms'],
        gradient: 'from-purple-400 to-violet-500',
        features: [
            'Services and pricing tables',
            'Case studies and results showcase',
            'Contact and discovery forms',
            'Timeline and checklist tools',
            'Blog and resources section',
            'Social proof and testimonials',
        ],
    },
    'lawyers': {
        icon: Scale,
        title: 'Lawyers',
        subtitle: 'Build trust with a professional website that highlights your expertise.',
        heroImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=600&fit=crop',
        highlights: ['Practice areas', 'Case results', 'Intake forms'],
        gradient: 'from-slate-600 to-gray-700',
        features: [
            'Practice areas and attorney bios',
            'Case results and testimonials',
            'Consultation and intake forms',
            'Secure document sharing',
            'Compliance and accessibility',
            'Blog and legal resources',
        ],
    },
    'yoga-teachers': {
        icon: Heart,
        title: 'Yoga Teachers',
        subtitle: 'Connect with students and share your practice.',
        heroImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=600&fit=crop',
        highlights: ['Class schedules', 'Retreat listings', 'Newsletter signup'],
        gradient: 'from-teal-400 to-cyan-500',
        features: [
            'Class schedules with booking',
            'Retreats and workshop pages',
            'Teacher bios and philosophy',
            'Blog and learning resources',
            'Newsletter and community',
            'Video integration for classes',
        ],
    },
    'business-consultants': {
        icon: BarChart3,
        title: 'Business Consultants',
        subtitle: 'Present your expertise and consulting services.',
        heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop',
        highlights: ['Case studies', 'ROI stories', 'Resource library'],
        gradient: 'from-blue-600 to-blue-600',
        features: [
            'Service pillars and outcomes',
            'Lead magnets and CTAs',
            'Case studies and ROI stories',
            'Booking and contact flows',
            'Resource library and blog',
            'Newsletter and thought leadership',
        ],
    },
    'investment-consultants': {
        icon: Wallet,
        title: 'Investment Consultants',
        subtitle: 'Share your financial advisory services professionally.',
        heroImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=600&fit=crop',
        highlights: ['Service packages', 'Performance charts', 'Secure scheduling'],
        gradient: 'from-emerald-600 to-teal-600',
        features: [
            'Service tiers and packages',
            'Compliance and disclosures',
            'Performance highlights and charts',
            'Secure contact and scheduling',
            'Newsletter and market insights',
            'Client portal integration',
        ],
    },
    'online-resume': {
        icon: FileText,
        title: 'Online Resume',
        subtitle: 'Stand out with a professional online resume.',
        heroImage: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=1200&h=600&fit=crop',
        highlights: ['Skills showcase', 'PDF export', 'Contact forms'],
        gradient: 'from-cyan-500 to-blue-500',
        features: [
            'Skills, experience, and projects showcase',
            'Case highlights and achievements',
            'Downloadable PDF export',
            'Contact and scheduling links',
            'SEO-friendly profile pages',
            'Social media integration',
        ],
    },
    'instagram-virtual-avatars': {
        icon: Users,
        title: 'Virtual Avatars',
        subtitle: 'Engaging digital personas for campaigns and brand storytelling.',
        heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop',
        highlights: ['Avatar design', 'Content pipelines', 'Brand storytelling'],
        gradient: 'from-violet-500 to-blue-500',
        features: [
            'Avatar concept and design',
            'Behavior scripts and voice',
            'Content pipelines and scheduling',
            'Compliance and brand safety',
            'Performance tracking',
            'Continuous iteration and improvement',
        ],
    },
    'virtual-ai-product-photography': {
        icon: Camera,
        title: 'AI Product Photography',
        subtitle: 'Studio-grade product imagery generated with AI.',
        heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop',
        highlights: ['Background removal', 'Bulk processing', 'Brand consistency'],
        gradient: 'from-amber-500 to-orange-500',
        features: [
            'Lighting and scene presets',
            'Background removal and styling',
            'Bulk image processing pipelines',
            'Prompt engineering and QA',
            'Brand guideline consistency',
            'Quick turnaround times',
        ],
    },
    'idea-to-go-live': {
        icon: Lightbulb,
        title: 'Custom Projects',
        subtitle: 'End-to-end project management from concept to launch.',
        heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
        highlights: ['Discovery workshops', 'MVP planning', 'Launch support'],
        gradient: 'from-amber-400 to-yellow-500',
        features: [
            'Discovery workshops and roadmaps',
            'MVP scoping and prioritization',
            'Vendor coordination and delivery',
            'Risk management and governance',
            'Launch planning and handover',
            'Post-launch support and iteration',
        ],
    },
};

const ServiceDetail = () => {
    const { slug } = useParams();
    // Check if there's a mapped slug, otherwise use the original
    const resolvedSlug = slugMap[slug] || slug;
    const svc = servicesData[resolvedSlug];

    if (!svc) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
                    <p className="text-slate-600 mb-8">The service you're looking for doesn't exist.</p>
                    <MagneticButton to="/services" variant="cta">
                        Browse All Services
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </MagneticButton>
                </div>
            </div>
        );
    }

    const Icon = svc.icon;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full filter blur-[120px]"
                        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <FadeUp>
                            <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-2xl flex items-center justify-center shadow-sm">
                                <Icon className="w-8 h-8 text-blue-600" />
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="section-title text-slate-900 mb-4">{svc.title}</h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">{svc.subtitle}</p>
                        </FadeUp>
                        <FadeUp delay={0.3}>
                            <div className="flex flex-wrap justify-center gap-3 mb-8">
                                {svc.highlights.map((h) => (
                                    <span key={h} className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium">
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.4}>
                            <MagneticButton to="/contact" variant="cta">
                                Request a Quote
                                <ArrowRight className="inline-block ml-2 w-4 h-4" />
                            </MagneticButton>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <AnimatedItem>
                            <h2 className="section-title text-slate-900">
                                What's <span className="gradient-text">Included</span>
                            </h2>
                        </AnimatedItem>
                    </AnimatedSection>

                    <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerChildren={0.1}>
                        {svc.features.map((feature, idx) => (
                            <AnimatedItem key={idx}>
                                <motion.div
                                    className="glass-panel p-6 flex items-start gap-4"
                                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(75, 163, 218, 0.2)' }}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-md">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-slate-700 text-lg font-medium">{feature}</p>
                                </motion.div>
                            </AnimatedItem>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* Visual Banner */}
            <section className="relative h-[400px] overflow-hidden">
                <motion.img
                    src={svc.heroImage}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
            </section>

            {/* CTA Section */}
            <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(123,143,163,0.05)_0%,_transparent_50%)]" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full filter blur-[100px]" />
                </div>

                <div className="container-custom relative z-10">
                    <AnimatedSection className="text-center">
                        <AnimatedItem>
                            <h2 className="section-title text-slate-900 mb-6">
                                Ready to Get Started with{' '}
                                <span className="text-blue-600 font-extrabold underline decoration-blue-300 decoration-4 underline-offset-4">{svc.title}</span>?
                            </h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
                                Speak with our experts to plan a tailored engagement and timeline.
                            </p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <MagneticButton to="/contact" variant="cta">
                                Start Your Project
                                <ArrowRight className="inline-block ml-2 w-4 h-4" />
                            </MagneticButton>
                        </AnimatedItem>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
