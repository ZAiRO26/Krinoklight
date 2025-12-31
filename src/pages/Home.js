import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Code, Palette, Brain, Smartphone, Globe, Zap, Building2, ShoppingCart, Heart, Film, Home as HomeIcon, Truck, Droplets, Scale, GraduationCap, Landmark, Lightbulb, FileSearch, Settings, TestTube, Rocket, Headphones, Database, Layers, CreditCard, Cpu, Link2, Box } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedItem, FadeUp, FloatingElement, Card3DReveal } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';
import SplitText from '../components/SplitText';

// Lazy load Noise Sphere Hero (Original organic blue noise sphere with GLSL)
const NoiseSphereHero = lazy(() => import('../components/NoiseSphereHero'));

const Home = () => {

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      desc: 'Stunning, responsive websites that convert visitors into customers',
      href: '/services/development',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      desc: 'Native and cross-platform mobile experiences',
      href: '/services/development',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      desc: 'Transform your business with cutting-edge AI integration',
      href: '/services/ai',
    },
    {
      icon: Code,
      title: 'Custom Software',
      desc: 'Tailored solutions built for your unique challenges',
      href: '/services/development',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Beautiful interfaces that users love to interact with',
      href: '/services/design',
    },
    {
      icon: Zap,
      title: 'Digital Strategy',
      desc: 'Data-driven strategies for digital transformation',
      href: '/services/ideation',
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "AI Sports Director",
      subtitle: "An automated multi-camera directing system that uses gaze and motion detection to switch angles during live streams. Generates real-time highlights.",
      image: "/ai-sports-director.png",
      tags: ["Computer Vision", "Python", "Real-time"],
      result: "100%",
      resultText: "Autonomous"
    },
    {
      id: 2,
      title: "LinkedIn Growth Agent",
      subtitle: "An AI agent that automates LinkedIn outreach and content scheduling. It creates personalized carousel posts and manages lead generation workflows autonomously.",
      image: "/linkedin-growth-agent.png",
      tags: ["GenAI", "n8n", "LangChain"],
      result: "10x",
      resultText: "Faster Reach"
    },
    {
      id: 3,
      title: "Immersive Client Platforms (KEZRON)",
      subtitle: "A high-end, animated web platform for client KEZRON, featuring 3D interactions and integrated AI automations for business logic and lead tracking.",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind", "Motion"],
      result: "Cinematic",
      resultText: "UX"
    },
    {
      id: 4,
      title: "Dual Sync Audio App",
      subtitle: "A mobile app for dual Bluetooth speaker syncing with AI-driven volume optimization and predictive audio leveling.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      tags: ["Android", "Embedded", "AI Analytics"],
      result: "Zero",
      resultText: "Latency"
    }
  ];

  const teamMembers = [
    {
      name: "Ravi Saxena",
      role: "Owner",
      description: "Leads vision, strategy, and client success.",
      avatar: "/team-ravi.png"
    },
    {
      name: "Shikhar Saxena",
      role: "Marketing & Sales Head",
      description: "Drives growth, partnerships, and revenue.",
      avatar: "/team-shikhar.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Digital & Social Media Lead",
      description: "Owns content, social, and digital campaigns.",
      avatar: "/team-priya.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      {/* Hero Section with WebGL 3D Background - Hybrid Light Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Organic Blue Noise Sphere - Full Visibility on Light Background */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={
            <div className="w-full h-full bg-white" />
          }>
            <NoiseSphereHero />
          </Suspense>
          {/* Gradient overlay for text readability - Light Theme Fade */}
          {/* Gradient overlay for text readability - Minimal Fade for Sphere Visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10 pointer-events-none" />
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="text-center max-w-5xl mx-auto">
            <FadeUp delay={0.2}>
              <h1 className="section-title-xl text-white mb-8 drop-shadow-lg">
                Your <span className="headline-serif-italic text-blue-400">Vision,</span>
                <br />
                <SplitText
                  className="headline-serif-bold"
                  splitBy="letter"
                  delay={0.3}
                  stagger={0.04}
                  animation="fadeUp"
                >
                  Engineered.
                </SplitText>
              </h1>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-body text-xl md:text-2xl text-slate-100 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                We provide a complete suite of development and marketing services for all businesses. Let us handle the tech, so you can focus on growth.
              </p>
            </FadeUp>

            {/* CTA Buttons */}
            <FadeUp delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <MagneticButton to="/contact" variant="cta">
                  Request a quote
                </MagneticButton>

                <Link
                  to="/services"
                  className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-slate-300/30 flex items-center justify-center group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                    <Play className="w-4 h-4 ml-0.5" />
                  </div>
                  <span className="font-medium drop-shadow-md">View Services</span>
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Trusted By Logo Marquee */}

        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-blue-600 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Bento Grid Section */}
      <section className="py-24 lg:py-32 bg-slate-50 relative">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">What We Do</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Comprehensive <span className="text-blue-600">Digital Services</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="section-subtitle mx-auto text-slate-600">
                From ideation to deployment, we provide end-to-end solutions that transform your digital presence.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          {/* Bento Grid */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerChildren={0.1}>
            {services.map((service, index) => (
              <Card3DReveal key={service.title}>
                <Link to={service.href} className="h-full block">
                  <motion.div
                    className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 h-full flex flex-col group cursor-pointer transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="icon-container mb-6 bg-blue-50 border border-blue-100 text-blue-600">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed flex-grow">
                      {service.desc}
                    </p>
                    <div className="mt-6 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </motion.div>
                </Link>
              </Card3DReveal>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Our Work</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Design, Engineering & <span className="text-blue-600">Applied AI</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="section-subtitle mx-auto text-slate-600">
                See how we've helped industry leaders achieve exceptional results.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerChildren={0.15}>
            {caseStudies.map((study) => (
              <AnimatedItem key={study.id}>
                <motion.div
                  className="group cursor-pointer h-full flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-blue-300 transition-all duration-500 shadow-lg hover:shadow-xl"
                  whileHover={{ y: -8 }}
                >
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Impact Stat Badge - Top Right */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-xl text-center min-w-[100px] shadow-md">
                        <p className="text-xl font-bold text-blue-600 leading-none mb-1">{study.result}</p>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{study.resultText}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section - Light Theme */}
                  <div className="p-8 flex-grow flex flex-col bg-white">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-4 leading-tight">
                      {study.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                      {study.subtitle}
                    </p>

                    <div className="mt-6 pt-6 border-t border-slate-100 flex items-center text-blue-600 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="font-medium text-sm">View details</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>

          <FadeUp delay={0.5}>
            <div className="text-center mt-16">
              <MagneticButton to="/clients" variant="secondary">
                View all case studies
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Who We Help</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Industries We <span className="text-blue-600">Serve</span>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8" staggerChildren={0.08}>
            {[
              { icon: Building2, label: 'Finance' },
              { icon: ShoppingCart, label: 'E-commerce' },
              { icon: Heart, label: 'Healthcare' },
              { icon: Film, label: 'Entertainment' },
              { icon: HomeIcon, label: 'Real Estate' },
              { icon: Truck, label: 'Supply Chain' },
              { icon: Droplets, label: 'Oil & Gas' },
              { icon: Scale, label: 'Legal' },
              { icon: GraduationCap, label: 'Education' },
              { icon: Landmark, label: 'Government' },
            ].map((industry, index) => (
              <AnimatedItem key={index}>
                <motion.div
                  className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <industry.icon className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 font-medium text-sm text-center">{industry.label}</span>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Our Execution Process Section */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">How We Work</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Our Execution <span className="text-blue-600">Process</span>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.1}>
            {[
              { icon: Lightbulb, title: 'Discovery Workshop', desc: 'We collaborate intensively to understand your vision, challenges, and goals. This lays the foundation for success.', step: '01' },
              { icon: FileSearch, title: 'Strategy & Solution Design', desc: 'Our architects design scalable solutions, refine requirements, and create detailed technical blueprints.', step: '02' },
              { icon: Settings, title: 'Development', desc: 'Agile sprints with transparent progress tracking. We build iteratively with your feedback at every stage.', step: '03' },
              { icon: TestTube, title: 'Testing & QA', desc: 'Rigorous testing including unit, integration, and user acceptance testing to ensure quality and reliability.', step: '04' },
              { icon: Rocket, title: 'Launch & Maintenance', desc: 'Seamless deployment with zero downtime. We provide ongoing maintenance and support post-launch.', step: '05' },
              { icon: Headphones, title: 'Support & Customer Service', desc: 'Dedicated support team available for troubleshooting, updates, and continuous improvement.', step: '06' },
            ].map((process, index) => (
              <AnimatedItem key={index}>
                <motion.div
                  className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full group relative"
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute top-6 right-6 text-4xl font-bold text-blue-100 group-hover:text-blue-200 transition-colors">
                    {process.step}
                  </div>
                  <process.icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {process.desc}
                  </p>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Tools & Tech Stack Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Our Expertise</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Tools & Tech <span className="text-blue-600">Stack</span>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.1}>
            {[
              {
                category: 'Frontend',
                icon: Layers,
                techs: ['React', 'Angular', 'Vue.js', 'Next.js', 'Tailwind', 'TypeScript']
              },
              {
                category: 'Payment Gateway',
                icon: CreditCard,
                techs: ['Stripe', 'Razorpay', 'PayPal', 'Square', 'Shopify Pay']
              },
              {
                category: 'Database',
                icon: Database,
                techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase']
              },
              {
                category: 'Mobile',
                icon: Smartphone,
                techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic']
              },
              {
                category: 'Blockchain',
                icon: Link2,
                techs: ['Ethereum', 'Solidity', 'Web3.js', 'Hardhat', 'IPFS']
              },
              {
                category: 'Emerging Tech',
                icon: Cpu,
                techs: ['AI/ML', 'Computer Vision', 'AR/VR', 'IoT', 'Edge Computing']
              },
            ].map((stack, index) => (
              <AnimatedItem key={index}>
                <motion.div
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all duration-300 h-full group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <stack.icon className="w-10 h-10 text-blue-600 mr-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {stack.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white text-slate-600 text-sm rounded-full border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingElement className="absolute top-20 left-10" delay={0} amplitude={20}>
            <div className="w-32 h-32 bg-blue-200/20 rounded-full blur-2xl" />
          </FloatingElement>
          <FloatingElement className="absolute bottom-20 right-10" delay={1} amplitude={15}>
            <div className="w-48 h-48 bg-purple-200/20 rounded-full blur-3xl" />
          </FloatingElement>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Meet our <span className="text-blue-600">Team</span>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerChildren={0.2}>
            {teamMembers.map((member, index) => (
              <AnimatedItem key={index} direction="scale">
                <motion.div
                  className="bg-white p-8 h-full rounded-2xl group cursor-pointer border border-slate-200 shadow-sm"
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: '0 25px 50px rgba(79, 70, 229, 0.15)'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-center mb-6">
                    <motion.img
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-slate-100 group-hover:border-blue-500 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors duration-300">{member.name}</h4>
                      <p className="text-sm text-blue-500 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{member.description}</p>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(123,143,163,0.05)_0%,_transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full filter blur-[100px]" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center">
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Ready to Build Something <br className="hidden md:block" />
                <span className="text-blue-600">Amazing?</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help you achieve your digital goals.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <MagneticButton to="/contact" variant="cta">
                Start Your Project Today
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </MagneticButton>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
