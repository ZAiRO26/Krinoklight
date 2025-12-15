import React from 'react';
import { Link } from 'react-router-dom';

// Simplified button without mouse tracking for better scroll performance
// Uses CSS transitions instead of JavaScript state updates
const MagneticButton = ({
    children,
    to = null,
    href = null,
    onClick = null,
    className = '',
    variant = 'primary' // 'primary', 'secondary', 'cta'
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'secondary':
                return 'btn-secondary';
            case 'cta':
                return 'btn-cta';
            case 'primary':
            default:
                return 'btn-primary';
        }
    };

    const buttonClassName = `inline-block ${getVariantStyles()} ${className} transform transition-transform duration-200 hover:scale-105 active:scale-95`;

    if (to) {
        return (
            <Link to={to} className={buttonClassName}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={buttonClassName} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    if (onClick) {
        return (
            <button onClick={onClick} className={buttonClassName}>
                {children}
            </button>
        );
    }

    return (
        <span className={buttonClassName}>
            {children}
        </span>
    );
};

export default MagneticButton;
