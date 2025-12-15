import React from 'react';
import { motion } from 'framer-motion';

// Performance-optimized animated section
const AnimatedSection = ({
    children,
    className = '',
    delay = 0,
    staggerChildren = 0.08, // Reduced for faster feel
    once = true,
    amount = 0.15 // Trigger earlier for smoother reveal
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: staggerChildren,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
        >
            {children}
        </motion.div>
    );
};

// Individual animated item - optimized for performance
export const AnimatedItem = ({
    children,
    className = '',
    direction = 'up' // 'up', 'down', 'left', 'right', 'fade'
}) => {
    // Use smaller translate values for smoother animation
    const getInitial = () => {
        switch (direction) {
            case 'up':
                return { opacity: 0, y: 30 }; // Reduced from 60
            case 'down':
                return { opacity: 0, y: -30 };
            case 'left':
                return { opacity: 0, x: 30 };
            case 'right':
                return { opacity: 0, x: -30 };
            case 'fade':
            default:
                return { opacity: 0 };
        }
    };

    const getAnimate = () => {
        switch (direction) {
            case 'up':
            case 'down':
                return { opacity: 1, y: 0 };
            case 'left':
            case 'right':
                return { opacity: 1, x: 0 };
            case 'fade':
            default:
                return { opacity: 1 };
        }
    };

    const itemVariants = {
        hidden: getInitial(),
        visible: {
            ...getAnimate(),
            transition: {
                duration: 0.5, // Reduced from 0.8 for snappier feel
                ease: 'easeOut', // Simpler easing for better performance
            },
        },
    };

    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
};

// Standalone fade-up animation - optimized
export const FadeUp = ({
    children,
    className = '',
    delay = 0,
    duration = 0.5, // Reduced from 0.8
    once = true
}) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 25 }} // Reduced from 50
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount: 0.15 }}
            transition={{
                duration,
                delay,
                ease: 'easeOut'
            }}
        >
            {children}
        </motion.div>
    );
};

// Scale on hover animation wrapper
export const ScaleOnHover = ({ children, className = '', scale = 1.03 }) => {
    return (
        <motion.div
            className={className}
            whileHover={{ scale }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
