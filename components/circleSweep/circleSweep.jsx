import React from 'react';

import './circleSweep.css'

const CircleSweep = ( {percentage} ) => {

    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <svg width="120" height="120" viewBox="0 0 120 120">
            {/* Base Circle */}
            <circle
                className="base-circle"
                cx="60"
                cy="60"
                r={radius}
            />
            <circle
                className="dynamic-sweep"
                cx="60"
                cy="60"
                r={radius}
                transform="rotate(-90 60 60)"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
            />
            <text
                className="percentage-text subtitle"
                x="60"
                y="60"
                dy=".3em"
            >
                {percentage}%
            </text>

        </svg>
    );
};

export default CircleSweep;