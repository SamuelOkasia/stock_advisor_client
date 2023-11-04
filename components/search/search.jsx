'use client'

import "./search.css"

import {useState, useEffect} from 'react';
import axios from 'axios';
import { FiSearch } from "react-icons/fi"
import {white} from "next/dist/lib/picocolors";
const Search = ( {setStockData, setNews, setHistory, setPrediction, setPercentage, setAdvice, setRenderGraph} ) => {

    const [query, setQuery] = useState('AAPL');
    const [error, setError] = useState(null);

/*    const [stockData, setStockData] = useState(null);
    const [news, setNews]  = useState(null);
    const [prediction, setPrediction]  = useState(null);
    const [advice, setAdvice]  = useState(null);*/




    const handleSearch = async (e) => {
        if (e) e.preventDefault();
        setRenderGraph(false);

        // Reset previous results and error
        setNews(null);
        setError(null);

        try {
            // Replace YOUR_API_ENDPOINT with your Flask API endpoint
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/stock/${query}`);
            setStockData(response.data.data);
            setNews(response.data.news);
            setHistory(response.data.history);
            setPrediction(response.data.prediction.predictions);
            setPercentage(response.data.prediction.confidence);
            setAdvice(response.data.prediction.recommendation);
            setRenderGraph(true);


        } catch (err) {
            setError('Failed to fetch data. Please try again.');
        }
    };

    useEffect(() => {
        handleSearch();
    }, []); // The empty dependency array means this useEffect runs once, similar to componentDidMount


    return (
        <div className="search">
            <form onSubmit={handleSearch}>
                <input
                    className="search-input"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ticker"
                />
                <button className="search-button" type="submit">{<FiSearch size={34} style={{ color: 'white' }}/>}</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Search;