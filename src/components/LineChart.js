import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchDailyData = async () =>
        {
            const { data } = await axios.get('https://covid19.mathdro.id/api/daily');
            const processData = data.map(({ confirmed, deaths, reportDate }) => ({ confirmed, deaths, reportDate }));
            setDailyData(processData);
        };
        fetchDailyData();
    }, [setDailyData])

    const labels = dailyData.map(({ reportDate }) => reportDate);
    const options = {
        legend: {
            labels: {
                fontColor: '#fff',
                fontSize: 16
            }
        },
        tooltips: {
            bodyFontSize: 16,
            xPadding: 15,
            yPadding: 10
        },
        responsive: true,
        scales: {
		backgroundColor: '#121212',
           xAxes: [
                { 
                   ticks: { fontColor: 'rgb(255,255,255)', fontSize: 14} ,
                   gridLines: { 
                       color: 'rgb(255,255,255, 0.2)',
                       zeroLineColor: 'rgb(255,255,255)'
                    }
                }
            ],
            yAxes: [
                { 
                   ticks: { fontColor: 'rgb(255,255,255)', fontSize: 14 } ,
                   gridLines: { 
                       color: 'rgba(255,255,255, 0.2)',
                       zeroLineColor: 'rgb(255,255,255)'
                    }
                }
            ],
        }
    }
    return (
        dailyData.length &&
        <Line data={{
            labels,
            datasets: [
                {
                    label: 'Przypadki śmiertelne',
                    borderColor: '#4a148c',
                    backgroundColor: 'rgba(74, 20, 140, 0.6)',
                    fill: true,
                    borderWidth: 3,
                    data: dailyData.map(({ deaths }) => deaths.total)
                },
                {
                    label: 'Przypadki zachorowań',
                    borderColor: '#d50000',
                    backgroundColor: 'rgba(255,0,0,0.6)',
                    borderWidth: 3,
                    fill: true,
                    data: dailyData.map(({ confirmed }) => confirmed.total)
                },
            ],
        }} 
        options={options}
        />
    );
};

export default LineChart;