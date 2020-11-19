import React from 'react';
import { Bar } from 'react-chartjs-2';
import moment from 'moment-timezone';
import 'moment/locale/pl';

const BarChart = ({ data }) => {
    const { confirmed, deaths, recovered, lastUpdate  } = data;
    const options = {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: `Aktualny stan, ${moment(lastUpdate).tz('Europe/Warsaw').format('D MMMM YYYY')} r.`,
            fontColor: 'rgb(255,255,255)',
            fontSize: 18
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
                    ticks: {
                        fontColor: 'rgb(255,255,255)',
                        fontSize: 12,
                    },
                    gridLines: { 
                       color: 'rgb(255,255,255, 0.2)',
                       zeroLineColor: 'rgb(255,255,255)'
                    }
                }
            ],
            yAxes: [
                { 
                    ticks: {
                        fontColor: 'rgb(255,255,255)',
                        fontSize: 12,
                    },
                    gridLines: { 
                       color: 'rgba(255,255,255, 0.2)',
                       zeroLineColor: 'rgb(255,255,255)' 
                    }
                }
            ],
        }
    };
    return (
        <Bar
            data= {{
                labels: ['Przypadki zachorowań', 'Przypadki śmiertelne', 'Wyzdrowienia'],
                datasets: [
                    {
                        label: 'Ilość osób',
                        data: [confirmed.value, deaths.value, recovered.value],
                        backgroundColor: ['rgba(255,0,0,0.7)', 'rgba(74, 20, 140, 0.7)', 'rgba(67, 160, 71, 0.7)']
                    }
                ]
            }}
            options={options}
        
        />
    );
};

export default BarChart;