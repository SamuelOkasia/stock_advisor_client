'use client'

import React, { useState } from "react";

import Image from 'next/image'
import Search from "@/components/search/search";
import News from "@/components/news/news";
import Stats from "@/components/stats/stats";
import Graph from "@/components/graph/graph";
import Prediction from "@/components/prediction/prediction";
import Advice from "@/components/advice/advice";

import "./page.css"
export default function Home() {

    const [stockData, setStockData] = useState({});
    const [news, setNews]  = useState([]);
    const [prediction, setPrediction]  = useState(null);
    const [percentage, setPercentage]  = useState(null);
    const [advice, setAdvice]  = useState(null);

    const [history, setHistory]  = useState([]);



    return (
        <main className="main section_padding">
            <div className="container">
                <Search setStockData={setStockData} setNews={setNews} setHistory={setHistory} setPrediction={setPrediction} setPercentage={setPercentage} setAdvice={setAdvice}/>
                <div className="content">
                    <News news={news}/>
                    <div className="content__stats">
                        {console.log(prediction)}
                        <p className="title">Stock</p>
                        <Stats title="Price" subtitle="Today Price" price={stockData.today_price}  percent="0" />
                        <Stats title="Week" subtitle="Week Price" price={stockData.week_price} percent={stockData.week_percent} />
                        <Stats title="Month" subtitle="Month Price" price={stockData.month_price} percent={stockData.month_percent} />
                        <Stats title="Year" subtitle="Year Price" price={stockData.year_price} percent={stockData.year_percent}  />
                        <Stats title="Max" subtitle="Price" price={stockData.beginning_price} percent={stockData.beginning_percent}  />

                    </div>
                    <Graph data={history}/>
                </div>
                <div className="content">
                    <Prediction PredictionList={prediction} Percentage={percentage}/>
                    <Advice advice={advice}/>
                </div>
            </div>

        </main>
  )
}
