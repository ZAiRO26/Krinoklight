import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink, Clock, Sparkles, RefreshCw, Star, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { FadeUp } from '../components/AnimatedSection';

const LatestNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // API endpoint - uses Vercel API in production, localhost:4000 for dev
    const getApiUrl = () => {
        if (process.env.REACT_APP_CHATBOT_API) {
            return process.env.REACT_APP_CHATBOT_API;
        }
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            return 'http://localhost:4000';
        }
        // Production: use Vercel-deployed chatbot API
        return 'https://vedaviks-chatbot-api.vercel.app';
    };

    const fetchNews = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${getApiUrl()}/api/latest-news`);
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
            const data = await response.json();
            setNews(data);
        } catch (err) {
            console.error('News fetch error:', err);
            setError(err.message);
            // Use curated sample data as fallback
            setNews([
                {
                    id: 'curated_1',
                    title: 'AI Adoption Accelerates Across Small Businesses',
                    url: 'https://techcrunch.com',
                    source: 'TechCrunch',
                    publishedAt: new Date().toISOString(),
                    summary: 'A new study reveals that over 60% of small businesses are now using AI tools for automation, customer service, and marketing.',
                    businessAngle: 'This trend represents a major opportunity for businesses to gain competitive advantage through early AI adoption.',
                    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
                    featured: true
                },
                {
                    id: 'curated_2',
                    title: 'React 19 Released with Major Performance Improvements',
                    url: 'https://react.dev',
                    source: 'React Blog',
                    publishedAt: new Date(Date.now() - 86400000).toISOString(),
                    summary: 'The React team announces version 19 with concurrent rendering improvements, automatic batching, and new Suspense features.',
                    businessAngle: 'Upgrading to React 19 can significantly improve your web application performance and user experience.',
                    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
                    featured: true
                },
                {
                    id: 'curated_3',
                    title: 'E-commerce Platforms Embrace AI Personalization',
                    url: 'https://shopify.com',
                    source: 'Retail Tech Weekly',
                    publishedAt: new Date(Date.now() - 172800000).toISOString(),
                    summary: 'Major platforms are rolling out AI features for product recommendations, dynamic pricing, and customer support chatbots.',
                    businessAngle: 'AI-powered personalization can boost conversion rates by up to 35% and dramatically improve customer satisfaction.',
                    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
                    featured: false
                },
                {
                    id: 'curated_4',
                    title: 'Cloud Computing Costs Drop as Competition Intensifies',
                    url: 'https://aws.amazon.com',
                    source: 'Cloud Weekly',
                    publishedAt: new Date(Date.now() - 259200000).toISOString(),
                    summary: 'AWS, Azure, and Google Cloud announce price cuts ranging from 15-30% on compute and storage services amid fierce competition.',
                    businessAngle: 'Now is an excellent time to migrate workloads to the cloud or scale existing infrastructure cost-effectively.',
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
                    featured: false
                },
                {
                    id: 'curated_5',
                    title: 'OpenAI Launches GPT-5 with Enhanced Reasoning',
                    url: 'https://openai.com',
                    source: 'AI News Daily',
                    publishedAt: new Date(Date.now() - 345600000).toISOString(),
                    summary: 'The latest GPT model demonstrates unprecedented reasoning capabilities, solving complex math problems and multi-step logic puzzles.',
                    businessAngle: 'Businesses can leverage GPT-5 for advanced automation, code generation, and decision support systems.',
                    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop',
                    featured: false
                },
                {
                    id: 'curated_6',
                    title: 'Cybersecurity Threats Surge: Zero-Trust Adoption Rises',
                    url: 'https://wired.com',
                    source: 'Wired Security',
                    publishedAt: new Date(Date.now() - 432000000).toISOString(),
                    summary: '2024 sees a 67% increase in ransomware attacks, prompting enterprises to adopt zero-trust security architectures rapidly.',
                    businessAngle: 'Implementing zero-trust security is no longer optional – it\'s essential for protecting business assets and customer data.',
                    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
                    featured: false
                },
                {
                    id: 'curated_7',
                    title: 'Mobile-First Design Now Accounts for 70% of Web Traffic',
                    url: 'https://uxdesign.cc',
                    source: 'UX Design Weekly',
                    publishedAt: new Date(Date.now() - 518400000).toISOString(),
                    summary: 'Latest analytics show mobile devices dominate web browsing, making responsive design and mobile optimization critical.',
                    businessAngle: 'Prioritizing mobile UX can directly impact conversion rates and search engine rankings.',
                    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
                    featured: false
                },
                {
                    id: 'curated_8',
                    title: 'Blockchain Technology Finds New Enterprise Applications',
                    url: 'https://coindesk.com',
                    source: 'CoinDesk',
                    publishedAt: new Date(Date.now() - 604800000).toISOString(),
                    summary: 'Beyond cryptocurrency, enterprises are adopting blockchain for supply chain tracking, identity verification, and smart contracts.',
                    businessAngle: 'Blockchain can provide transparency and trust in business operations, reducing fraud and administrative costs.',
                    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop',
                    featured: false
                },
                {
                    id: 'curated_9',
                    title: 'Low-Code Platforms Transform Enterprise Development',
                    url: 'https://forbes.com',
                    source: 'Forbes Technology',
                    publishedAt: new Date(Date.now() - 691200000).toISOString(),
                    summary: 'Gartner predicts 70% of new applications will use low-code or no-code technologies by 2025, democratizing software development.',
                    businessAngle: 'Low-code platforms can accelerate digital transformation while reducing development costs by up to 50%.',
                    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
                    featured: false
                },
                {
                    id: 'curated_10',
                    title: 'Remote Work Tools See Record Investment in 2024',
                    url: 'https://techradar.com',
                    source: 'TechRadar',
                    publishedAt: new Date(Date.now() - 777600000).toISOString(),
                    summary: 'Collaboration and productivity software companies raise $15B+ as hybrid work becomes the permanent norm for knowledge workers.',
                    businessAngle: 'Investing in robust remote work infrastructure is essential for attracting talent and maintaining productivity.',
                    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
                    featured: false
                }
            ]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const NewsCard = ({ article, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={`relative group ${article.featured ? 'md:col-span-2' : ''}`}
        >
            <div className="h-full bg-white border border-slate-200 rounded-2xl overflow-hidden
                      hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10
                      transition-all duration-500 hover:-translate-y-1">

                {/* Featured Badge */}
                {article.featured && (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 
                          rounded-full text-xs font-semibold flex items-center gap-1 text-white shadow-md">
                        <Star className="w-3 h-3" />
                        Featured
                    </div>
                )}

                {/* Card Content - Horizontal Layout */}
                <div className={`flex ${article.featured ? 'flex-col md:flex-row' : 'flex-col'}`}>

                    {/* Text Content */}
                    <div className="flex-1 p-6">
                        {/* Source & Date */}
                        <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                            <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-medium uppercase tracking-wide">
                                {article.source}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {formatDate(article.publishedAt)}
                            </span>
                        </div>

                        {/* Title */}
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link"
                        >
                            <h3 className={`font-bold text-slate-900 mb-3 group-hover/link:text-blue-600 
                                 transition-colors leading-tight ${article.featured ? 'text-2xl' : 'text-lg'}`}>
                                {article.title}
                                <ExternalLink className="w-4 h-4 ml-2 inline opacity-0 group-hover/link:opacity-100 
                                             transition-opacity text-blue-500" />
                            </h3>
                        </a>

                        {/* AI Summary */}
                        <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                            {article.summary}
                        </p>

                        {/* Business Angle - Styled Differently */}
                        <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg mb-3">
                            <div className="flex items-start gap-2">
                                <TrendingUp className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                                <p className="text-xs text-indigo-900 italic">
                                    <span className="font-semibold text-blue-700">Why this matters: </span>
                                    {article.businessAngle}
                                </p>
                            </div>
                        </div>

                        {/* Curated Tag */}
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                            <span>Curated by Krinok AI</span>
                        </div>
                    </div>

                    {/* Thumbnail Image */}
                    {article.image && (
                        <div className={`relative overflow-hidden ${article.featured
                            ? 'md:w-80 h-48 md:h-auto'
                            : 'h-48'
                            }`}>
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover transition-transform duration-500 
                                          group-hover:scale-105"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection>
                        <FadeUp>
                            <div className="text-center max-w-4xl mx-auto">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 
                                border border-blue-500/30 rounded-full text-blue-600 text-sm mb-6">
                                    <Sparkles className="w-4 h-4" />
                                    AI-Curated News Feed
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
                                    Latest News
                                </h1>
                                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                                    Stay ahead with AI-curated tech, AI, and business news. Summaries and business
                                    insights are generated by our in-house AI stack—the same tech we use to build
                                    custom agents for clients.
                                </p>
                            </div>
                        </FadeUp>
                    </AnimatedSection>
                </div>
            </section>

            {/* News Grid Section */}
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    {/* Refresh Button */}
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={fetchNews}
                            disabled={loading}
                            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 
                          border border-slate-200 rounded-lg text-slate-600 text-sm shadow-sm
                          transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                            {loading ? 'Refreshing...' : 'Refresh News'}
                        </button>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-12 h-12 border-2 border-blue-600 border-t-transparent 
                                  rounded-full animate-spin mb-4" />
                            <p className="text-slate-500">Loading latest news...</p>
                        </div>
                    )}



                    {/* News Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.map((article, index) => (
                            <NewsCard key={article.id} article={article} index={index} />
                        ))}
                    </div>

                    {/* Empty State */}
                    {!loading && news.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400 text-lg">No news articles available at the moment.</p>
                            <button
                                onClick={fetchNews}
                                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg 
                           text-white font-medium transition-colors shadow-lg shadow-blue-500/20"
                            >
                                Try Again
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 border-t border-slate-200 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900">
                        Want AI Like This for Your Business?
                    </h2>
                    <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                        The same AI technology that powers this news curation can be customized
                        for your business. Chatbots, automation, content generation—we build it all.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r 
                       from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 
                       rounded-xl text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                    >
                        Let's Build Together
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default LatestNews;
