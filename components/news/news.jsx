import React from 'react';

import './news.css'
import { BiLinkExternal } from "react-icons/bi"
const News = ( {news} ) => {
    return (
        <div className="news">
            <h1 className="title">News</h1>
            <div className="news__content">
                {
                    Array.isArray(news) &&
                    Array.isArray(news[0]?.news) &&
                    news[0].news.map((item, index) => (
                        <div key={index}>
                            <p className="news__content-title">{item.title}</p>
                            <a href={item.url} className="news__content-message">{item.author}</a>
{/*
                            <p className="colour">{item.url}</p>
*/}
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default News;