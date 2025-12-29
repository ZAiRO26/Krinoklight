import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, BookOpen, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Digital Product Development",
    excerpt: "Explore how artificial intelligence is transforming the way we build and maintain digital products, from automated testing to intelligent user interfaces.",
    author: { name: "Sarah Johnson", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face" },
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    tags: ["AI", "Digital Products", "Innovation"]
  };

  const recentPosts = [
    {
      id: 2,
      title: "Building Scalable Design Systems: A Complete Guide",
      excerpt: "Learn the best practices for creating and maintaining design systems that scale.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "The Rise of Fintech: Trends and Opportunities",
      excerpt: "Discover the latest trends in financial technology and how they're reshaping the industry.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Fintech",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Optimizing Mobile App Performance",
      excerpt: "Essential strategies for improving mobile app performance and user experience.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Sustainable Technology: Building Green Solutions",
      excerpt: "How to create environmentally conscious digital products.",
      author: "Lisa Wang",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "The Psychology of User Experience Design",
      excerpt: "Understanding user behavior to create more engaging experiences.",
      author: "Alex Thompson",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "UX Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Cloud-Native Development: Benefits and Challenges",
      excerpt: "Exploring the advantages and pitfalls of cloud-native applications.",
      author: "Robert Lee",
      date: "March 1, 2024",
      readTime: "11 min read",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
    }
  ];

  const categories = [
    "All", "AI & Technology", "Design", "Development", "Fintech", "Mobile", "UX Design", "Cloud"
  ];

  const newsletters = [
    {
      title: "Tech Trends Weekly",
      description: "Stay updated with the latest technology trends and industry insights.",
      subscribers: "15,000+",
      frequency: "Weekly"
    },
    {
      title: "Design Insights",
      description: "Expert tips and best practices for digital product design.",
      subscribers: "8,500+",
      frequency: "Bi-weekly"
    },
    {
      title: "Development Deep Dive",
      description: "Technical articles and tutorials for developers.",
      subscribers: "12,000+",
      frequency: "Weekly"
    }
  ];

  const filteredPosts = selectedCategory === 'All'
    ? recentPosts
    : recentPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mesh-bg pt-32 pb-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeUp>
              <p className="text-accent-cyan font-medium tracking-widest uppercase mb-6">
                Knowledge Hub
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="section-title text-slate-900 mb-6 leading-tight">
                Krinok <span className="gradient-text">Insights</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Explore our latest articles, expert opinions, and in-depth analysis on technology, design, and business.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <AnimatedItem>
              <p className="text-accent-cyan font-medium tracking-widest uppercase mb-4">Editor's Pick</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900">
                Featured <span className="gradient-text">Article</span>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <FadeUp>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center glass-panel p-8"
              whileHover={{ boxShadow: '0 0 60px rgba(75, 163, 218, 0.2)' }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
              </div>

              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm font-semibold">
                  {featuredPost.category}
                </span>
                <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-lg text-slate-600">{featuredPost.excerpt}</p>

                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-slate-200"
                    />
                    <span>{featuredPost.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <MagneticButton to={`/insights/${featuredPost.id}`} variant="cta">
                  Read Article
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </MagneticButton>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="flex justify-center flex-wrap gap-3">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <h2 className="section-title text-slate-900">
                Latest <span className="gradient-text">Articles</span>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.1}>
            {filteredPosts.map((post) => (
              <AnimatedItem key={post.id}>
                <motion.div
                  className="group cursor-pointer h-full"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative overflow-hidden rounded-xl mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-navy-secondary/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        to={`/insights/blog/${post.id}`}
                        className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center gap-1 transition-colors"
                      >
                        Read more
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>

          <FadeUp delay={0.3}>
            <div className="text-center mt-12">
              <MagneticButton to="/insights/blog" variant="secondary">
                View all articles
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Newsletters Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-accent-cyan font-medium tracking-widest uppercase mb-4">Stay Updated</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-4">
                Our <span className="gradient-text">Newsletters</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="section-subtitle text-slate-600">
                Subscribe to get the latest insights delivered to your inbox.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerChildren={0.1}>
            {newsletters.map((newsletter, index) => (
              <AnimatedItem key={index}>
                <motion.div
                  className="glass-panel p-8 h-full flex flex-col"
                  whileHover={{ y: -5, boxShadow: '0 0 40px rgba(75, 163, 218, 0.2)' }}
                >
                  <div className="icon-container mb-6 bg-indigo-50">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{newsletter.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{newsletter.description}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <span>{newsletter.subscribers} subscribers</span>
                    <span>{newsletter.frequency}</span>
                  </div>
                  <button className="btn-cta w-full flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Subscribe
                  </button>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center">
            <AnimatedItem>
              <h2 className="section-title text-white mb-6">
                Share Your <span className="text-indigo-200">Insights</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                Have a story to tell? We're always looking for guest contributors and thought leaders.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <MagneticButton to="/contact" className="bg-white text-navy-primary hover:bg-white/90">
                Write for Us
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </MagneticButton>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Insights;