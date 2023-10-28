import React from 'react';

import "./advice.css"
import Gauge from "@/components/gauge/gauge";
const Advice = ( {advice} ) => {
    return (
        <div className="advice">
            <p className="title">Should you buy now</p>
            {console.log(advice)}


            { advice &&
                <div className="advice__content">
                    <div className="advice__content__messsage">
                        <p className="advice__content-title">Our Indicators say it would be a {advice[0]} time to buy now </p>
                        <p className="advice__content-message">Ensure you've done thorough research and consulted with a financial advisor before making any decisions.</p>
                    </div>
                    <Gauge value={advice[1]}/>
                </div>
            }

        </div>
    );
};

export default Advice;