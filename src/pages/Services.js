import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Brain, Settings, Users, Lightbulb, CheckCircle2, Sparkles, Grid3X3 } from 'lucide-react';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Ideation",
      slug: "ideation",
      description: "Identify, shape and validate your product idea",
      features: [
        "Product strategy and roadmap",
        "Market research and validation",
        "MVP definition and planning",
        "User research and personas"
      ],
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Code,
      title: "Software Development",
      slug: "development",
      description: "Bring products to life with world-class engineering",
      features: [
        "Web and mobile development",
        "Cloud infrastructure",
        "API development and integration",
        "DevOps and CI/CD"
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Design",
      slug: "design",
      description: "Craft beautiful digital experiences across platforms",
      features: [
        "UI/UX design",
        "Design systems",
        "Prototyping and wireframing",
        "Brand identity design"
      ],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Brain,
      title: "Generative AI & Data",
      slug: "ai",
      description: "Leverage AI to transform your business processes",
      features: [
        "AI strategy and implementation",
        "Machine learning models",
        "Data analytics and insights",
        "Natural language processing"
      ],
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Settings,
      title: "Maintenance",
      slug: "maintenance",
      description: "Safeguard your product's quality and reliability",
      features: [
        "Application monitoring",
        "Performance optimization",
        "Security updates",
        "Bug fixes and support"
      ],
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: Users,
      title: "Cooperation Models",
      slug: "cooperation",
      description: "Choose the collaboration model that fits your needs",
      features: [
        "Dedicated teams",
        "Staff augmentation",
        "Technical consulting",
        "Agile development"
      ],
      gradient: "from-sky-500 to-blue-500",
    }
  ];

  const processSteps = [
    {
      number: "01",
      phase: "Discovery",
      title: "Understand your vision",
      desc: "We dive deep into your business goals, target audience, and technical requirements."
    },
    {
      number: "02",
      phase: "Strategy",
      title: "Define the roadmap",
      desc: "Together, we create a detailed project plan with clear milestones and deliverables."
    },
    {
      number: "03",
      phase: "Design",
      title: "Craft the experience",
      desc: "Our designers create intuitive, beautiful interfaces that resonate with your brand."
    },
    {
      number: "04",
      phase: "Development",
      title: "Build with excellence",
      desc: "Our engineers bring designs to life using cutting-edge technologies."
    },
    {
      number: "05",
      phase: "Launch",
      title: "Deploy and grow",
      desc: "We ensure a smooth launch and provide ongoing support to help your product thrive."
    }
  ];

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-primary/20 to-transparent" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeUp>
              <p className="text-accent-cyan font-medium tracking-widest uppercase mb-4 text-sm">
                What We Offer
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Our <span className="gradient-text">Services</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-xl text-neutral-slate max-w-2xl mx-auto leading-relaxed mb-10">
                We provide end-to-end digital product development services to help you scale, innovate, and get ahead of the competition.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* All Products CTA Banner */}
      <section className="pb-16">
        <div className="container-custom">
          <FadeUp>
            <Link
              to="/services/products"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy-primary via-navy-secondary to-accent-cyan p-8 md:p-12">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Grid3X3 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Explore All Products
                      </h3>
                      <p className="text-white/80 text-lg">
                        18+ solutions for businesses, creatives & professionals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-white font-semibold text-lg group-hover:gap-4 transition-all">
                    <span>View All Products</span>
                    <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Services Grid - Clean 3-column layout */}
      <section className="pb-24">
        <div className="container-custom">
          <AnimatedSection
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerChildren={0.08}
          >
            {services.map((service) => (
              <AnimatedItem key={service.title}>
                <Link to={`/services/${service.slug}`} className="group block h-full">
                  <div className="h-full p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-accent-cyan/30 hover:bg-white/[0.04] transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-slate mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-white/70 group-hover:text-white/90 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-accent-cyan mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center text-accent-cyan font-medium group-hover:text-white transition-colors">
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

      {/* Process Section - Clean timeline */}
      <section className="py-24 bg-gradient-to-b from-navy-primary/30 to-transparent">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-accent-cyan font-medium tracking-widest uppercase mb-4 text-sm">
                How We Work
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-neutral-slate max-w-2xl mx-auto">
                A proven methodology that delivers results on time and within budget.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-5 gap-6" staggerChildren={0.1}>
            {processSteps.map((step, index) => (
              <AnimatedItem key={step.number}>
                <div className="text-center group">
                  {/* Step number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-accent-cyan/10 border-2 border-accent-cyan/30 flex items-center justify-center group-hover:bg-accent-cyan/20 group-hover:border-accent-cyan/50 transition-all duration-300">
                      <span className="text-2xl font-bold text-accent-cyan">{step.number}</span>
                    </div>
                    {/* Connector line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-accent-cyan/30 to-transparent -translate-y-1/2" />
                    )}
                  </div>

                  {/* Phase */}
                  <p className="text-accent-cyan font-semibold text-sm mb-2">{step.phase}</p>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-neutral-slate text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto">
              <Sparkles className="w-12 h-12 text-accent-cyan mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-neutral-slate mb-10">
                Let's discuss how we can help bring your vision to life with our expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton to="/contact" variant="cta">
                  Get in Touch
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </MagneticButton>
                <MagneticButton to="/services/products" variant="secondary">
                  View All Products
                </MagneticButton>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Services;