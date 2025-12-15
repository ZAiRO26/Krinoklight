import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`relative p-2 rounded-full transition-all duration-300 
                ${theme === 'dark'
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                } ${className}`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <div className="relative w-5 h-5">
                {theme === 'dark' ? (
                    <Sun className="w-5 h-5 transition-transform duration-300" />
                ) : (
                    <Moon className="w-5 h-5 transition-transform duration-300" />
                )}
            </div>
        </button>
    );
};

export default ThemeToggle;
