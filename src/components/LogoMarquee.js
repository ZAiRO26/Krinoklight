import React from 'react';

// CSS-based marquee animation for optimal performance
// Uses CSS transform which is GPU-accelerated
const LogoMarquee = ({
    logos = [],
    speed = 25,
    pauseOnHover = true,
    className = ''
}) => {
    // Default logos if none provided
    const defaultLogos = [
        { name: 'Microsoft', text: 'MICROSOFT' },
        { name: 'Google', text: 'GOOGLE' },
        { name: 'Amazon', text: 'AMAZON' },
        { name: 'Meta', text: 'META' },
        { name: 'Apple', text: 'APPLE' },
        { name: 'Netflix', text: 'NETFLIX' },
        { name: 'Spotify', text: 'SPOTIFY' },
        { name: 'Uber', text: 'UBER' },
    ];

    const displayLogos = logos.length > 0 ? logos : defaultLogos;

    // Double the logos for seamless loop
    const doubledLogos = [...displayLogos, ...displayLogos];

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Gradient masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* CSS animated marquee - GPU accelerated */}
            <div
                className={`flex items-center gap-16 animate-marquee ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
                style={{
                    animationDuration: `${speed}s`,
                    willChange: 'transform'
                }}
            >
                {doubledLogos.map((logo, index) => (
                    <div
                        key={`${logo.name}-${index}`}
                        className="flex-shrink-0 px-8"
                    >
                        {logo.image ? (
                            <img
                                src={logo.image}
                                alt={logo.name}
                                className="h-8 md:h-10 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        ) : (
                            <span className="text-2xl md:text-3xl font-bold font-display text-slate-300 hover:text-slate-600 transition-colors duration-300 whitespace-nowrap tracking-wider">
                                {logo.text || logo.name}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Trusted By section wrapper with title
export const TrustedBySection = ({ logos = [], title = "Trusted by industry leaders" }) => {
    return (
        <div className="py-12 md:py-16">
            <p className="text-center text-sm text-slate-500 uppercase tracking-widest mb-8 font-medium">
                {title}
            </p>
            <LogoMarquee logos={logos} />
        </div>
    );
};

export default LogoMarquee;
