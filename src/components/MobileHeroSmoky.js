import React from 'react';
import { motion } from 'framer-motion';

const MobileHeroSmoky = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-white">
            {/* Underlying soft gradient base */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white" />

            {/* Smoky Elements - Layered CSS for depth */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Smoke Layer 1 - Deep Blue Drift (Darker for contrast) */}
                <motion.div
                    className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] opacity-50"
                    style={{
                        background: 'radial-gradient(circle at center, #1e40af 0%, transparent 65%)',
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        x: [0, 80, -60, 0],
                        y: [0, -60, 40, 0],
                        scale: [1, 1.3, 0.8, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Smoke Layer 2 - Cyan Mist (Vibrant) */}
                <motion.div
                    className="absolute -bottom-1/4 -right-1/4 w-[140%] h-[140%] opacity-60"
                    style={{
                        background: 'radial-gradient(circle at center, #0891b2 0%, transparent 70%)',
                        filter: 'blur(70px)',
                    }}
                    animate={{
                        x: [0, -100, 70, 0],
                        y: [0, 60, -80, 0],
                        rotate: [0, 20, -20, 0],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Smoke Layer 3 - Central Vibrant Blue Core */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-40"
                    style={{
                        background: 'radial-gradient(circle at center, #4f46e5 0%, transparent 60%)',
                        filter: 'blur(90px)',
                    }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />


                {/* Smoke Layer 4 - Moving Accent Mist */}
                <motion.div
                    className="absolute top-1/2 left-0 w-full h-[60%] opacity-30"
                    style={{
                        background: 'radial-gradient(ellipse at center, #0ea5e9 0%, transparent 75%)',
                        filter: 'blur(130px)',
                    }}
                    animate={{
                        x: [200, -200, 200],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Texture/Noise overlay for that 'smoky' feel */}
                <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Static Vignette - reduced opacity to avoid washing out the colors */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_white_100%)] opacity-40" />
        </div>
    );
};

export default MobileHeroSmoky;
