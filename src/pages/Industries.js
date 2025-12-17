import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShoppingCart, Heart, GraduationCap, Home, Leaf, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

const Industries = () => {
  const industries = [
    {
      icon: TrendingUp,
      title: "Finance",
      description: "Digital transformation for financial services",
      features: ["Fintech solutions", "Payment systems", "Risk management", "Compliance automation"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      gradient: "from-blue-500 to-cyan-500",
      result: "5x",
      resultLabel: "ROI increase"
    },
    {
      icon: ShoppingCart,
      title: "Commerce",
      description: "E-commerce and retail digital solutions",
      features: ["E-commerce platforms", "Marketplace solutions", "Inventory management", "Mobile commerce"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      gradient: "from-orange-500 to-amber-500",
      result: "77%",
      resultLabel: "Faster delivery"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Digital health and medical technology",
      features: ["Telemedicine platforms", "Health monitoring apps", "Patient management", "Healthcare analytics"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      gradient: "from-rose-500 to-pink-500",
      result: "99%",
      resultLabel: "Faster processes"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "EdTech and learning platforms",
      features: ["Learning management", "Educational apps", "Content creation", "Virtual classrooms"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      gradient: "from-violet-500 to-purple-500",
      result: "2x",
      resultLabel: "Engagement"
    },
    {
      icon: Home,
      title: "Proptech",
      description: "Real estate technology solutions",
      features: ["Property management", "Real estate marketplaces", "Virtual tours", "Tenant portals"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      gradient: "from-emerald-500 to-green-500",
      result: "60%",
      resultLabel: "More engagement"
    },
    {
      icon: Leaf,
      title: "Greentech",
      description: "Sustainable technology solutions",
      features: ["Energy management", "Sustainability tracking", "Carbon footprint", "Environmental monitoring"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
      gradient: "from-teal-500 to-cyan-500",
      result: "40%",
      resultLabel: "Carbon reduction"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "50+", label: "Fortune 500 Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "95%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="mesh-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full filter blur-[120px]"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeUp>
              <p className="text-accent-cyan font-medium tracking-widest uppercase mb-6">
                Industry Expertise
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="section-title text-white mb-6 leading-tight">
                Industries We <span className="gradient-text">Serve</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-xl text-neutral-slate max-w-3xl mx-auto leading-relaxed">
                We leverage deep industry knowledge to deliver tailored digital solutions that drive growth and innovation across sectors.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding gradient-navy-bg relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerChildren={0.1}>
            {stats.map((stat, index) => (
              <AnimatedItem key={index}>
                <div className="text-center">
                  <motion.p
                    className="stat-value mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-neutral-slate font-medium">{stat.label}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom">
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerChildren={0.1}>
            {industries.map((industry) => (
              <AnimatedItem key={industry.title}>
                <motion.div
                  className="group cursor-pointer bento-card h-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden rounded-xl mb-6 -mx-2 -mt-2">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent" />
                    <div className="absolute top-4 right-4 glass-panel px-3 py-1.5">
                      <p className="text-lg font-bold text-white">{industry.result}</p>
                      <p className="text-xs text-accent-cyan">{industry.resultLabel}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className={`icon-container bg-gradient-to-br ${industry.gradient}`}>
                      <industry.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {industry.title}
                    </h3>
                  </div>

                  <p className="text-neutral-slate mb-4">{industry.description}</p>

                  <ul className="space-y-2 mb-6">
                    {industry.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white/70 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/industries/${industry.title.toLowerCase()}`}
                    className="inline-flex items-center text-accent-cyan font-medium hover:text-white transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy-primary via-navy-secondary to-accent-cyan relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center">
            <AnimatedItem>
              <h2 className="section-title text-white mb-6">
                Let's Build the Future of Your Industry{' '}
                <span className="text-gradient">Together</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Contact us to learn how our industry expertise can benefit your business.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <MagneticButton to="/contact" className="bg-white text-navy-primary hover:bg-white/90">
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

export default Industries;