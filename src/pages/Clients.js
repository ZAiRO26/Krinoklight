import React from 'react';
import { ArrowRight, Star, Clock, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';
import LogoMarquee from '../components/LogoMarquee';

const Clients = () => {
  const featuredCaseStudies = [
    {
      id: 1,
      title: "AI Sports Director",
      subtitle: "An automated multi-camera directing system that uses gaze and motion detection to switch angles during live streams. Generates real-time highlights.",
      category: "Computer Vision",
      company: "Internal Project",
      industry: "Sports Tech",
      duration: "8 weeks",
      team: "4 people",
      image: "/ai-sports-director.png",
      results: ["100% Autonomous", "Real-time switching", "AI-powered highlights"]
    },
    {
      id: 2,
      title: "LinkedIn Growth Agent",
      subtitle: "An AI agent that automates LinkedIn outreach and content scheduling. It creates personalized carousel posts and manages lead generation workflows autonomously.",
      category: "GenAI Automation",
      company: "Internal Project",
      industry: "Marketing Tech",
      duration: "6 weeks",
      team: "3 people",
      image: "/linkedin-growth-agent.png",
      results: ["10x Faster Reach", "Autonomous posting", "Lead generation"]
    },
    {
      id: 3,
      title: "Immersive Client Platforms (KEZRON)",
      subtitle: "A high-end, animated web platform for client KEZRON, featuring 3D interactions and integrated AI automations for business logic and lead tracking.",
      category: "Web Development",
      company: "KEZRON",
      industry: "Enterprise",
      duration: "12 weeks",
      team: "5 people",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
      results: ["Cinematic UX", "3D interactions", "AI automations"]
    },
    {
      id: 4,
      title: "Dual Sync Audio App",
      subtitle: "A mobile app for dual Bluetooth speaker syncing with AI-driven volume optimization and predictive audio leveling.",
      category: "Mobile Development",
      company: "Internal Project",
      industry: "Audio Tech",
      duration: "10 weeks",
      team: "4 people",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      results: ["Zero Latency", "AI volume optimization", "Dual speaker sync"]
    }
  ];

  const clientLogos = [
    { name: 'Microsoft', text: 'MICROSOFT' },
    { name: 'Google', text: 'GOOGLE' },
    { name: 'Amazon', text: 'AMAZON' },
    { name: 'Shopify', text: 'SHOPIFY' },
    { name: 'Shopaccino', text: 'SHOPACCINO' },
    { name: 'Uber', text: 'UBER' },
  ];

  const testimonials = [
    {
      name: "Mark Greiner",
      role: "Digital Innovation Manager",
      company: "Kezron",
      quote: "Excellence and speed. It's rare to get both, and Krinok delivers.",
      rating: 5
    },
    {
      name: "Adi Pavlovic",
      role: "Director of Innovation",
      company: "Keller Williams",
      quote: "Krinok has been the best agency we've worked with so far.",
      rating: 5
    },
    {
      name: "Mohd. Zabiullah",
      role: "Chief Product Officer",
      company: "Luqi Harvest",
      quote: "It doesn't feel like an external team, it feels like we're just working together.",
      rating: 5
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "20+", label: "Clients Globally" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeUp>
              <p className="text-blue-600 font-medium tracking-widest uppercase mb-6">
                Success Stories
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="section-title text-slate-900 mb-6 leading-tight">
                Our <span className="text-blue-600">Clients</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover how we've helped companies across industries achieve remarkable results through innovative digital solutions.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom">
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerChildren={0.1}>
            {stats.map((stat, index) => (
              <AnimatedItem key={index}>
                <div className="text-center">
                  <motion.p
                    className="stat-value mb-2 text-white"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-blue-100 font-medium">{stat.label}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container-custom">
          <p className="text-center text-sm text-slate-500 uppercase tracking-widest mb-8 font-medium">
            Partners with industry leaders
          </p>
          <LogoMarquee logos={clientLogos} speed={30} />
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Case Studies</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Featured <span className="text-blue-600">Projects</span>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <div className="space-y-20">
            {featuredCaseStudies.map((study, index) => (
              <AnimatedSection key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <AnimatedItem className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-block px-3 py-1 bg-white/90 text-blue-600 text-sm font-medium rounded-full backdrop-blur-sm shadow-sm">
                        {study.category}
                      </span>
                    </div>
                  </motion.div>
                </AnimatedItem>

                <AnimatedItem className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{study.title}</h3>
                    <p className="text-lg text-slate-600">{study.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 text-center">
                      <p className="font-bold text-slate-900 truncate">{study.company}</p>
                      <p className="text-xs text-slate-500 truncate">{study.industry}</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3 text-blue-600" />
                        <p className="font-bold text-slate-900 text-sm">{study.duration}</p>
                      </div>
                      <p className="text-xs text-slate-500">Duration</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Users className="w-3 h-3 text-blue-600" />
                        <p className="font-bold text-slate-900 text-sm">{study.team}</p>
                      </div>
                      <p className="text-xs text-slate-500">Team</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <MagneticButton to={`/clients/case-study/${study.id}`} variant="cta">
                    Read full case study
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </MagneticButton>
                </AnimatedItem>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Testimonials</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Client <span className="text-blue-600">Feedback</span>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerChildren={0.15}>
            {testimonials.map((testimonial, index) => (
              <AnimatedItem key={index}>
                <motion.div
                  className="bg-slate-50 p-8 h-full rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                    <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center">
            <AnimatedItem>
              <h2 className="section-title text-white mb-6">
                Ready to Join Our <span className="text-blue-200">Success Stories</span>?
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <MagneticButton to="/contact" className="bg-white text-indigo-900 hover:bg-white/90">
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

export default Clients;
