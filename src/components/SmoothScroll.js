import React from 'react';

// Disabled Lenis smooth scroll library due to performance issues
// Using native CSS smooth scroll instead (scroll-behavior: smooth in index.css)
const SmoothScroll = ({ children }) => {
    // Simply pass through children - native scroll handles everything
    return <>{children}</>;
};

export default SmoothScroll;
