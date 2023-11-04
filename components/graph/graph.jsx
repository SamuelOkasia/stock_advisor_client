'use client'

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import './graph.css'

const Graph = ({ data, renderGraph }) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        if (data) {
            const formattedLabels = data.map(item => {
                const dateObj = new Date(item[0]);
                return dateObj.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit' });
            });

            setChartData({
                labels: formattedLabels,
                datasets: [
                    {
                        label: 'Stock Prices',
                        data: data.map(item => item[1]),  // Prices
                        backgroundColor: '#0D8D74',
                    }
                ]
            });
        }
    }, [data]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#0D8D74',
                    font: {
                        size: 16,
                        family: 'Arial'
                    }
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(13, 141, 116, 0.8)',
                bodyFont: {
                    color: '#FFFFFF'
                },
                titleFont: {
                    color: '#FFFFFF',
                    size: 18
                }
            }
        },
        scales: {
            x: {
                type: 'category',
                position: 'bottom',
                grid: {
                    color: '#242B37'
                },
                ticks: {
                    color: '#0D8D74'
                }
            },
            y: {
                grid: {
                    color: '#242B37'
                },
                ticks: {
                    color: '#0D8D74'
                }
            }
        }
    };

    return (
        <div className="graph">
            <div className="graph__content">
                <p className="title">Visuals</p>
                {
                    renderGraph && (chartData.labels?.length ? <Bar className="graph-graph" data={chartData}/> : <p>No data available</p>)
                }

            </div>

        </div>
    );
};

export default Graph;