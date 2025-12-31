import React from 'react';
import { motion } from 'framer-motion';

const MobileHeroSmoky = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-white">
            {/* Underlying soft gradient base */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white" />

            {/* Smoky Elements - Layered CSS for depth */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Smoke Layer 1 - Deep Blue Drift */}
                <motion.div
                    className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] opacity-20"
                    style={{
                        background: 'radial-gradient(circle at center, #2563eb 0%, transparent 65%)',
                        filter: 'blur(80px)',
                    }}
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -40, 20, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Smoke Layer 2 - Cyan Mist */}
                <motion.div
                    className="absolute -bottom-1/4 -right-1/4 w-[130%] h-[130%] opacity-30"
                    style={{
                        background: 'radial-gradient(circle at center, #06b6d4 0%, transparent 70%)',
                        filter: 'blur(100px)',
                    }}
                    animate={{
                        x: [0, -60, 40, 0],
                        y: [0, 30, -50, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Smoke Layer 3 - Central Soft Glow */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[120%] h-[120%] opacity-30"
                    style={{
                        background: 'radial-gradient(circle at center, #60a5fa 0%, transparent 60%)',
                        filter: 'blur(150px)',
                    }}
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [0.7, 1.3, 0.7],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Smoke Layer 4 - Accent Mist */}
                <motion.div
                    className="absolute top-1/2 left-0 w-full h-[80%] opacity-20"
                    style={{
                        background: 'radial-gradient(ellipse at center, #06b6d4 0%, transparent 80%)',
                        filter: 'blur(180px)',
                    }}
                    animate={{
                        x: [100, -100, 100],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Texture/Noise overlay for that 'smoky' feel */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Static Vignette to anchor the content */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_white_100%)] opacity-60" />
        </div>
    );
};

export default MobileHeroSmoky;
