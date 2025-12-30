import React from 'react';
import { ArrowRight, Users, Target, Heart, Globe, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering the highest quality solutions to our clients.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about technology and innovation, always eager to learn and push boundaries.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaboration, both within our team and with our clients.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We work with clients worldwide to create solutions that make a positive impact on society.",
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  const teamStats = [
    { value: "20+", label: "Team Members" },
    { value: "15+", label: "Years Experience" },
    { value: "20+", label: "Countries Served" },
    { value: "50+", label: "Projects Completed" }
  ];

  const culture = [
    {
      title: "Remote-first culture",
      description: "We embrace remote work and flexible schedules, allowing our team to work from anywhere in the world while maintaining strong collaboration.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      icon: Globe
    },
    {
      title: "Continuous learning",
      description: "We invest in our team's growth through training, conferences, and knowledge sharing sessions to stay at the cutting edge.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      icon: Sparkles
    },
    {
      title: "Innovation focus",
      description: "We stay at the forefront of technology trends and always explore new ways to solve problems creatively.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      icon: Zap
    }
  ];

  const awards = [
    { year: "2024", title: "Best Digital Agency", organization: "Clutch.co" },
    { year: "2024", title: "Top Development Company", organization: "GoodFirms" },
    { year: "2023", title: "Excellence in Innovation", organization: "TechCrunch" },
    { year: "2023", title: "Best Workplace", organization: "Great Place to Work" }
  ];

  const testimonials = [
    {
      name: "Anna Kowalski",
      role: "Senior Developer",
      quote: "Working at Krinok has been an incredible journey. The culture of innovation and continuous learning keeps me motivated every day.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Piotr Nowak",
      role: "Product Designer",
      quote: "The collaborative environment and focus on user-centered design make every project exciting and rewarding.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Maria Garcia",
      role: "Project Manager",
      quote: "Krinok's commitment to excellence and client success is what makes this company truly special.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-100/50 rounded-full filter blur-[120px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeUp>
              <p className="text-indigo-600 font-medium tracking-widest uppercase mb-6">
                Who We Are
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="section-title text-slate-900 mb-6 leading-tight">
                About <span className="text-indigo-600">Krinok</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We're a team of passionate technologists, designers, and innovators dedicated to helping businesses succeed in the digital age.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <AnimatedItem>
                <p className="text-indigo-600 font-medium tracking-widest uppercase mb-4">Our Mission</p>
              </AnimatedItem>
              <AnimatedItem>
                <h2 className="section-title text-slate-900 mb-6">
                  Transforming <span className="text-indigo-600">Ideas</span> Into Reality
                </h2>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We accelerate digital transformation by providing cutting-edge technology solutions that help businesses innovate, grow, and succeed in an ever-changing digital landscape.
                </p>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our team of experts combines deep technical knowledge with creative problem-solving to deliver solutions that not only meet today's needs but also prepare our clients for tomorrow's challenges.
                </p>
              </AnimatedItem>
              <AnimatedItem>
                <MagneticButton to="/contact" variant="cta">
                  Work with us
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </MagneticButton>
              </AnimatedItem>
            </AnimatedSection>

            <FadeUp delay={0.3}>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl transform rotate-3 opacity-20" />
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="Krinok team"
                  className="relative rounded-2xl w-full object-cover shadow-glow"
                />
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/10 rounded-full filter blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerChildren={0.1}>
            {teamStats.map((stat, index) => (
              <AnimatedItem key={index}>
                <div className="text-center">
                  <motion.p
                    className="stat-value mb-2 text-white"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-indigo-100 font-medium">{stat.label}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-indigo-600 font-medium tracking-widest uppercase mb-4">What Drives Us</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Our <span className="text-indigo-600">Values</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="section-subtitle text-slate-600">
                These core values guide everything we do and shape our culture.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerChildren={0.1}>
            {values.map((value, index) => (
              <AnimatedItem key={index}>
                <motion.div
                  className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center h-full hover:shadow-xl hover:translate-y-[-5px] transition-all"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`icon-container mx-auto mb-6 bg-gradient-to-br ${value.gradient}`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-indigo-600 font-medium tracking-widest uppercase mb-4">Life at Krinok</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Our <span className="text-indigo-600">Culture</span>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <div className="space-y-20">
            {culture.map((item, index) => (
              <AnimatedSection
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <AnimatedItem className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="icon-container bg-indigo-50 border border-indigo-100 text-indigo-600">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">{item.description}</p>
                </AnimatedItem>
                <AnimatedItem className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    className="relative rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                </AnimatedItem>
              </AnimatedSection>
            ))}
          </div>
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
                Join Our <span className="text-indigo-200">Team</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for technology and innovation.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton to="/about/careers" className="bg-white text-navy-primary hover:bg-white/90">
                  View Careers
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </MagneticButton>
                <MagneticButton to="/contact" variant="secondary" className="border-white/30 hover:border-white">
                  Get in Touch
                </MagneticButton>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;