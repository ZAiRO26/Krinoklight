import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudyDetail = () => {
    // For now, redirect to clients page
    // In a real implementation, this would fetch case study data based on the ID
    return (
        <div className="min-h-screen bg-background-dark flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Case Study Coming Soon</h1>
                <p className="text-neutral-slate mb-8">We're working on detailed case study pages.</p>
                <Link
                    to="/clients"
                    className="btn-cta inline-flex items-center gap-2"
                >
                    View All Case Studies
                </Link>
            </div>
        </div>
    );
};

export default CaseStudyDetail;
