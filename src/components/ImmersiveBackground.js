import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

/**
 * ImmersiveBackground - Optimized animated gradient background
 * Uses pure CSS gradients for maximum performance (no Canvas pixel manipulation)
 */
const ImmersiveBackground = ({ children }) => {
    const isMobile = useMediaQuery('(max-width: 1024px)');

    return (
        <div className="relative min-h-screen">
            {/* CSS-based animated gradient background - much faster than Canvas */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    background: '#F8FAFC', // slate-50
                }}
            >
                {/* Animated gradient blobs - ONLY for Desktop as they can lag mobile scroll blurs */}
                {!isMobile && (
                    <>
                        <div
                            className="absolute w-[600px] h-[600px] rounded-full opacity-60 animate-blob-1"
                            style={{
                                background: 'radial-gradient(circle, rgba(224, 231, 255, 0.8) 0%, transparent 70%)', // blue-100
                                left: '10%',
                                top: '20%',
                                filter: 'blur(60px)',
                            }}
                        />
                        <div
                            className="absolute w-[500px] h-[500px] rounded-full opacity-50 animate-blob-2"
                            style={{
                                background: 'radial-gradient(circle, rgba(219, 234, 254, 0.8) 0%, transparent 70%)', // blue-100
                                right: '10%',
                                top: '50%',
                                filter: 'blur(60px)',
                            }}
                        />
                        <div
                            className="absolute w-[450px] h-[450px] rounded-full opacity-40 animate-blob-3"
                            style={{
                                background: 'radial-gradient(circle, rgba(243, 244, 246, 0.8) 0%, transparent 70%)', // gray-100
                                left: '40%',
                                bottom: '10%',
                                filter: 'blur(60px)',
                            }}
                        />
                    </>
                )}
            </div>

            {/* Vignette overlay */}
            {/* Vignette overlay - lighter for light theme */}
            <div
                className="fixed inset-0 z-[1] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(255,255,255,0.4) 100%)'
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default ImmersiveBackground;
