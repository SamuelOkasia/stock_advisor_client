import React from 'react';

import './prediction.css'

import CircleSweep from "@/components/circleSweep/circleSweep";
const Prediction = ( {PredictionList, Percentage} ) => {

    const Value = ( {Day, Price} ) => (
        <>
            <div className="value">
                <h1 className="subtitle">{Day}</h1>
                <p className="price">{Price}</p>
            </div>
        </>
    )

    return (
        <div className="prediction">
            <div className="prediction__title">
                <h1 className="title">Prediction next</h1>
                <input className="prediction__title-input title" placeholder="10"/>
                <h1 className="title"> days</h1>
            </div>

            <div className="prediction__values subtitle">

                {
                    Array.isArray(PredictionList) &&
                    PredictionList.map((item, index) => (
                        <Value key={index} Day={item[0]} Price={item[1]} />
                    ))
                }


            </div>

            <div className="prediction__message">
                <CircleSweep percentage={Percentage}/>

                <div className="prediction__message__message">
                    <p className="prediction__message__message-title">We're {Percentage}% sure of our upcoming stock price projections</p>
                    <p className="prediction__message__message-disclaimer">Our predictions are based on historical stock data and advanced machine learning algorithms.</p>

                </div>

            </div>
        </div>
    );
};

export default Prediction;