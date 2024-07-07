'use client'

import "./search.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiSearch } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";  // Import the spinner icon
import { white } from "next/dist/lib/picocolors";

const Search = ({ setStockData, setNews, setHistory, setPrediction, setPercentage, setAdvice, setRenderGraph }) => {
    const [query, setQuery] = useState('AAPL');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);  // Add loading state

    const handleSearch = async (e) => {
        if (e) e.preventDefault();
        setRenderGraph(false);
        setLoading(true);  // Set loading to true

        // Reset previous results and error
        setNews(null);
        setError(null);

        try {
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
        } finally {
            setLoading(false);  // Set loading to false
        }
    };

    useEffect(() => {
        handleSearch();
    }, []);

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
                <button className="search-button" type="submit">
                    {loading ? <FaSpinner size={34} className="spinner" /> : <FiSearch size={34} style={{ color: 'white' }} />}
                </button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Search;
