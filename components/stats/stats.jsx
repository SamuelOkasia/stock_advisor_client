import React from 'react';

import "./stats.css"
const Stats = ( {title, subtitle,price, percent} ) => {
    return (

        <div className="stats">
            <div className="stats__labels">
                <p className="stats-title">{title}</p>
                <p className="stats-subtitle">{subtitle}</p>
            </div>

            <div className="stats__values">
                <p className={`stats-percent ${Number(percent) < 0 ? 'negative' : 'positive'}`}>
                    {percent}
                    {percent !== null && percent !== undefined && percent !== "" && "%"}

                </p>
                <p className="stats-price">{price}</p>
            </div>
        </div>
    );
};

export default Stats;