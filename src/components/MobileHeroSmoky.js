import React from 'react';
import { motion } from 'framer-motion';

const MobileHeroSmoky = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-white">
            {/* Underlying vibrant gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-white to-cyan-50" />

            {/* Smoky Elements - Optimised for Mobile Performance (Zero flicker) */}
            <div className="absolute inset-0 pointer-events-none" style={{ perspective: '1000px', transform: 'translateZ(0)' }}>
                {/* Smoke Layer 1 - Deep Blue Mist */}
                <motion.div
                    className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%]"
                    style={{
                        background: 'radial-gradient(circle at center, #2563eb 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        opacity: 0.5,
                        willChange: 'transform',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden'
                    }}
                    animate={{
                        x: [0, 30, -30, 0],
                        y: [0, -20, 20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Smoke Layer 2 - Cyan Cloud */}
                <motion.div
                    className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[120%]"
                    style={{
                        background: 'radial-gradient(circle at center, #06b6d4 0%, transparent 70%)',
                        filter: 'blur(50px)',
                        opacity: 0.6,
                        willChange: 'transform',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden'
                    }}
                    animate={{
                        x: [0, -40, 40, 0],
                        y: [0, 30, -30, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Smoke Layer 3 - Central Vibrant Hub */}
                <motion.div
                    className="absolute top-[10%] left-[10%] w-full h-full"
                    style={{
                        background: 'radial-gradient(circle at center, #3b82f6 0%, transparent 60%)',
                        filter: 'blur(60px)',
                        opacity: 0.7,
                        willChange: 'transform',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden'
                    }}
                    animate={{
                        scale: [0.9, 1.15, 0.9],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Smoke Layer 4 - Accent Puff */}
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-80 h-80"
                    style={{
                        background: 'radial-gradient(circle at center, #0ea5e9 0%, transparent 70%)',
                        filter: 'blur(35px)',
                        opacity: 0.4,
                        willChange: 'transform',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden'
                    }}
                    animate={{
                        x: [0, 50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Static Vignette - Reduced to keep it bright */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_white_100%)] opacity-25" />
        </div>
    );
};

export default MobileHeroSmoky;
