import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FloatingNav - Desktop header with dropdowns, mobile hamburger menu
 */
const FloatingNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    // Navigation structure with subpages - Complete list matching Footer
    const navLinks = [
        {
            name: 'Services',
            href: '/services',
            subpages: [
                { name: 'App Development', href: '/services/app-development' },
                { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
                { name: 'Meta/Instagram Ads', href: '/services/meta-instagram-ads' },
                { name: 'Instagram Virtual Avatars', href: '/services/instagram-virtual-avatars' },
                { name: 'AI Product Photography', href: '/services/virtual-ai-product-photography' },
                { name: 'E-commerce', href: '/services/ecommerce' },
                { name: 'Idea to Go Live', href: '/services/idea-to-go-live' },
                { name: 'Products', href: '/services/products' },
            ]
        },
        {
            name: 'Industries',
            href: '/industries',
            subpages: [
                { name: 'Finance', href: '/industries/finance' },
                { name: 'Commerce', href: '/industries/commerce' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'Education', href: '/industries/education' },
                { name: 'Proptech', href: '/industries/proptech' },
                { name: 'Greentech', href: '/industries/greentech' },
            ]
        },
        {
            name: 'Clients',
            href: '/clients',
            subpages: [
                { name: 'Case Studies', href: '/clients/case-studies' },
                { name: 'Projects', href: '/clients/projects' },
            ]
        },
        {
            name: 'About',
            href: '/about',
            subpages: [
                { name: 'How We Work', href: '/about/how-we-work' },
                { name: 'Sustainability', href: '/about/sustainability' },
                { name: 'Careers', href: '/about/careers' },
                { name: 'Job Opportunities', href: '/about/jobs' },
                { name: 'Press Office', href: '/about/press' },
            ]
        },
        {
            name: 'Insights',
            href: '/insights',
            subpages: [
                { name: 'Hot News', href: '/latest-news' },
                { name: 'Packages', href: '/insights/packages' },
                { name: 'Blog', href: '/insights/blog' },
                { name: 'Newsletters', href: '/insights/newsletters' },
            ]
        },
        { name: 'Contact', href: '/contact' },
    ];

    const handleLogoClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const menuVariants = {
        closed: { opacity: 0, scale: 0.95 },
        open: { opacity: 1, scale: 1 }
    };

    return (
        <>
            {/* Fixed Header Bar */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={handleLogoClick}
                        className="group"
                    >
                        <motion.span
                            className="text-xl font-medium text-white/90 tracking-[0.2em] uppercase group-hover:text-white transition-colors"
                            whileHover={{ scale: 1.02 }}
                        >
                            KRINOK
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation - Hidden on mobile/tablet */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.subpages && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.href}
                                    className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors
                                        ${location.pathname.startsWith(link.href)
                                            ? 'text-white'
                                            : 'text-white/60 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    {link.subpages && (
                                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {link.subpages && activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 py-2 min-w-[200px] rounded-xl backdrop-blur-xl bg-black/80 border border-white/10 shadow-xl"
                                        >
                                            {link.subpages.map((subpage) => (
                                                <Link
                                                    key={subpage.name}
                                                    to={subpage.href}
                                                    className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                                                >
                                                    {subpage.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        {/* CTA Button */}
                        <Link
                            to="/contact"
                            className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                            Get in Touch
                        </Link>
                    </nav>

                    {/* Mobile Menu Button - Only visible on mobile/tablet */}
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </motion.button>
                </div>
            </motion.header>

            {/* Mobile Full Screen Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 backdrop-blur-xl bg-black/95 flex items-center justify-center lg:hidden"
                    >
                        <nav className="flex flex-col items-center space-y-4 max-h-[80vh] overflow-y-auto py-8">
                            {navLinks.map((link, i) => (
                                <div key={link.name} className="text-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        <Link
                                            to={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`text-3xl md:text-4xl font-light tracking-tight transition-all block
                                                ${location.pathname.startsWith(link.href)
                                                    ? 'text-white'
                                                    : 'text-white/50 hover:text-white'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>

                                    {/* Mobile Subpages */}
                                    {link.subpages && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 + i * 0.05 }}
                                            className="flex flex-wrap justify-center gap-2 mt-2"
                                        >
                                            {link.subpages.map((subpage) => (
                                                <Link
                                                    key={subpage.name}
                                                    to={subpage.href}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="text-sm text-white/40 hover:text-white/70 transition-colors px-2"
                                                >
                                                    {subpage.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* CTA at bottom of mobile menu */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-20 left-1/2 -translate-x-1/2"
                        >
                            <Link
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
                            >
                                Get in Touch
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FloatingNav;
