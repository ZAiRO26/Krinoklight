import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Briefcase, Users, Megaphone, ChevronDown, ArrowRight, Send, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection, { AnimatedItem, FadeUp } from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  // API endpoint - uses Vercel API in production
  const getApiUrl = () => {
    if (process.env.REACT_APP_CHATBOT_API) {
      return process.env.REACT_APP_CHATBOT_API;
    }
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:4000';
    }
    return 'https://vedaviks-chatbot-api.vercel.app';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message')
    };

    try {
      const response = await fetch(`${getApiUrl()}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setFormSubmitted(true);
      } else {
        setSubmitError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: "New York",
      country: "United States",
      address: "350 Fifth Avenue, Suite 4800",
      phone: "+1 212 555 0123",
      email: "newyork@Krinok.com",
      hours: "9 AM - 6 PM EST",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "1 Canada Square, Canary Wharf",
      phone: "+44 20 7946 0958",
      email: "london@Krinok.com",
      hours: "9 AM - 5 PM GMT",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "1 Raffles Place, Tower 2",
      phone: "+65 6123 4567",
      email: "singapore@Krinok.com",
      hours: "9 AM - 6 PM SGT",
    }
  ];

  const contactMethods = [
    {
      icon: Briefcase,
      title: "Business Inquiries",
      description: "Let's talk about your project and how we can help you grow.",
      contact: "hello@Krinok.com",
      link: "mailto:hello@Krinok.com",
    },
    {
      icon: Users,
      title: "Careers",
      description: "Join our team of talented professionals and shape the future.",
      contact: "careers@Krinok.com",
      link: "mailto:careers@Krinok.com",
    },
    {
      icon: Megaphone,
      title: "Media & Press",
      description: "For all media inquiries, please get in touch with our team.",
      contact: "press@Krinok.com",
      link: "mailto:press@Krinok.com",
    }
  ];

  const faqs = [
    {
      question: "What kind of services do you offer?",
      answer: "We offer a wide range of services including web development, mobile app development, product design, AI solutions, and digital consulting. We work with companies of all sizes, from startups to large enterprises."
    },
    {
      question: "How does the project process work?",
      answer: "Our process is collaborative and transparent. We start with a discovery phase to understand your needs, followed by design, development, and testing. We use agile methodologies to ensure we deliver value quickly and efficiently."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We are technology-agnostic but have deep expertise in modern frameworks like React, Next.js, Node.js, and Python. We choose the best tools for the job to ensure your project is scalable, secure, and high-performing."
    },
    {
      question: "How much does it cost to work with you?",
      answer: "The cost depends on the project scope and complexity. We offer flexible engagement models, including fixed-price projects and dedicated teams. Contact us for a detailed proposal tailored to your needs."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full filter blur-[120px]"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeUp>
              <p className="text-blue-600 font-medium tracking-widest uppercase mb-6">
                Get In Touch
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="section-title text-slate-900 mb-6 leading-tight">
                Contact <span className="text-blue-600">Us</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                We're here to help. Reach out to us for any business inquiries, career opportunities, or media requests.
              </p>
            </FadeUp>
          </div>

          {/* Contact Methods */}
          <AnimatedSection className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerChildren={0.1}>
            {contactMethods.map((method, index) => (
              <AnimatedItem key={index}>
                <motion.a
                  href={method.link}
                  className="block p-8 rounded-2xl bg-white border border-slate-200 text-center h-full group hover:shadow-xl hover:shadow-blue-100 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="icon-container mx-auto mb-6 bg-blue-50 border border-blue-100 text-blue-600">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{method.description}</p>
                  <p className="text-blue-600 font-medium">{method.contact}</p>
                </motion.a>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Two-Column Contact Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left Column - Contact Info */}
            <AnimatedSection className="space-y-8">
              <AnimatedItem>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Get In <span className="text-blue-600">Touch</span>
                </h2>
                <p className="text-slate-600 text-lg">
                  We'd love to hear from you. Get in touch and let's create something amazing together.
                </p>
              </AnimatedItem>

              {/* Corporate Office */}
              <AnimatedItem>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Corporate Office</h3>
                    <p className="text-slate-600 text-sm">
                      KRINOK TECHNOLOGIES<br />
                      289-D, Near MP Mall, Pitampura<br />
                      New Delhi, India - 110034
                    </p>
                  </div>
                </div>
              </AnimatedItem>

              {/* Customer Support */}
              <AnimatedItem>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Customer Support & Sales</h3>
                    <p className="text-slate-600 text-sm">+91 9354785960</p>
                  </div>
                </div>
              </AnimatedItem>

              {/* Email */}
              <AnimatedItem>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600 text-sm">
                      Support and Sales: <a href="mailto:contact@krinok.com" className="text-blue-600 hover:underline">contact@krinok.com</a>
                    </p>
                  </div>
                </div>
              </AnimatedItem>

              {/* Business Hours */}
              <AnimatedItem>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600 text-sm">
                      Monday-Friday: 9 AM IST - 6 PM IST<br />
                      Saturday and Sunday: Holiday
                    </p>
                  </div>
                </div>
              </AnimatedItem>

              {/* Social Media */}
              <AnimatedItem>
                <div className="pt-4 border-t border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">Follow Us on Social Media</h3>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors">
                      <Facebook className="w-4 h-4" />
                      <span className="text-sm">Facebook</span>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 hover:border-pink-500 hover:text-pink-600 transition-colors">
                      <Instagram className="w-4 h-4" />
                      <span className="text-sm">Instagram</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 hover:border-blue-700 hover:text-blue-700 transition-colors">
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 hover:border-sky-500 hover:text-sky-500 transition-colors">
                      <Twitter className="w-4 h-4" />
                      <span className="text-sm">X</span>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 hover:border-red-500 hover:text-red-600 transition-colors">
                      <Youtube className="w-4 h-4" />
                      <span className="text-sm">YouTube</span>
                    </a>
                  </div>
                </div>
              </AnimatedItem>
            </AnimatedSection>

            {/* Right Column - Contact Form */}
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-2xl shadow-xl p-12 text-center border border-slate-100"
                >
                  <motion.div
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Send className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Thank you!</h3>
                  <p className="text-slate-600 mb-8">
                    Your message has been sent successfully. We will be in touch shortly.
                  </p>
                  <MagneticButton onClick={() => setFormSubmitted(false)} variant="secondary">
                    Send another message
                  </MagneticButton>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us A Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Purpose of Contact</label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      >
                        <option value="" className="bg-white">Select Purpose</option>
                        <option value="ai" className="bg-white">AI Solutions</option>
                        <option value="design" className="bg-white">UI/UX Design</option>
                        <option value="web" className="bg-white">Web Development</option>
                        <option value="mobile" className="bg-white">Mobile Development</option>
                        <option value="marketing" className="bg-white">Digital Marketing</option>
                        <option value="consulting" className="bg-white">Consulting</option>
                        <option value="other" className="bg-white">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                        placeholder="Please describe your requirements..."
                      ></textarea>
                    </div>

                    {submitError && (
                      <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm font-medium border border-red-100">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 py-4 ${isSubmitting
                        ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200'
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-12">
            <AnimatedItem>
              <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">Visit Us</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Our <span className="text-blue-600">Location</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Stop by our office for a cup of coffee and a chat about your next big idea.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection>
            <AnimatedItem>
              <motion.div
                className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 border-4 border-white relative group"
                whileHover={{ scale: 1.002 }}
                transition={{ duration: 0.4 }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=28.704724161745172,77.14844126859242&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Krinok Office Location"
                  className="group-hover:filter-none transition-all duration-500"
                ></iframe>

                {/* Optional Overlay Card */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 max-w-xs transform transition-transform hover:scale-105 duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">New Delhi HQ</h4>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        Pitampura, New Delhi<br />
                        India 110034
                      </p>
                      <a
                        href="https://maps.app.goo.gl/2qmdpBz5rTrDX7hu6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-blue-600 hover:text-indigo-800 flex items-center gap-1 uppercase tracking-wide"
                      >
                        Get Directions <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-blue-600 font-medium tracking-widest uppercase mb-4">FAQ</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Frequently Asked <span className="text-blue-600">Questions</span>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="space-y-4" staggerChildren={0.1}>
            {faqs.map((faq, index) => (
              <AnimatedItem key={index}>
                <motion.div
                  className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
                  whileHover={{ borderColor: 'rgba(99, 102, 241, 0.4)' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 flex justify-between items-center text-left"
                  >
                    <span className="font-bold text-slate-900 pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(123,143,163,0.05)_0%,_transparent_50%)]" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center">
            <AnimatedItem>
              <h2 className="section-title text-slate-900 mb-6">
                Have a Project in Mind?{' '}
                <span className="text-blue-600">Let's Talk.</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                We're always excited to hear about new ideas and challenges.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton variant="cta">
                  Get a Free Consultation
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </MagneticButton>
                <MagneticButton to="/services" variant="secondary">
                  Explore Services
                </MagneticButton>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
