import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowUpRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'App Development', href: '/services/app-development' },
      { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
      { name: 'Meta/Instagram Ads', href: '/services/meta-instagram-ads' },
      { name: 'Instagram Virtual Avatars', href: '/services/instagram-virtual-avatars' },
      { name: 'Virtual AI Product Photography', href: '/services/virtual-ai-product-photography' },
      { name: 'Shopping Websites / E-commerce', href: '/services/ecommerce' },
      { name: 'Idea to Go Live', href: '/services/idea-to-go-live' },
    ],
    industries: [
      { name: 'Finance', href: '/industries/finance' },
      { name: 'Commerce', href: '/industries/commerce' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Education', href: '/industries/education' },
      { name: 'Proptech', href: '/industries/proptech' },
      { name: 'Greentech', href: '/industries/greentech' },
    ],
    about: [
      { name: 'How we work', href: '/about/how-we-work' },
      { name: 'Sustainability', href: '/about/sustainability' },
      { name: 'Working at Krinok', href: '/about/careers' },
      { name: 'Contact us', href: '/contact' },
      { name: 'Press Office', href: '/about/press' },
    ],
    insights: [
      { name: 'Hot News', href: '/latest-news' },
      { name: 'Packages', href: '/insights/packages' },
      { name: 'Blog', href: '/insights/blog' },
      { name: 'Newsletters and originals', href: '/insights/newsletters' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61585833633573', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/krinok.dev/', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const FooterLinkItem = ({ link }) => (
    <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
      <Link
        to={link.href}
        className="text-slate-500 hover:text-blue-600 transition-colors text-sm flex items-center group"
      >
        <span>{link.name}</span>
        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    </motion.li>
  );

  return (
    <footer className="bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full filter blur-[150px]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50/50 rounded-full filter blur-[100px]" />
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-slate-200">
        <div className="container-custom py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-display mb-2 text-slate-900">
                Stay ahead of the curve
              </h3>
              <p className="text-slate-500">
                Subscribe to our newsletter for industry insights and updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-80 pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
                />
              </div>
              <motion.button
                className="btn-cta whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-6 group inline-block">
              <span className="text-lg font-medium text-slate-900 tracking-[0.25em] uppercase hover:text-blue-600 transition-colors logo-font">
                KRINOK
              </span>
            </Link>
            <p className="text-slate-500 mb-8 max-w-sm leading-relaxed">
              We provide a complete suite of development and marketing services for industrial businesses. Let us handle the tech, so you can focus on growth.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-slate-900 mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <FooterLinkItem key={link.name} link={link} />
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-display font-bold text-slate-900 mb-6">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <FooterLinkItem key={link.name} link={link} />
              ))}
            </ul>
          </div>

          {/* About & Insights */}
          <div>
            <h3 className="font-display font-bold text-slate-900 mb-6">About us</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.about.map((link) => (
                <FooterLinkItem key={link.name} link={link} />
              ))}
            </ul>
            <h3 className="font-display font-bold text-slate-900 mb-6">Insights</h3>
            <ul className="space-y-3">
              {footerLinks.insights.map((link) => (
                <FooterLinkItem key={link.name} link={link} />
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>© {new Date().getFullYear()} Krinok. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-blue-600 transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="text-sm text-slate-500 flex items-center gap-2">
              Made with
              <motion.span
                className="text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ❤️
              </motion.span>
              in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
