import React from 'react';
import { css } from '@emotion/core';
import LineChart from './LineChart';
import BarChart from './BarChart';

const chart = css({
    gridArea: 'chart',
    maxWidth: '100%',
    '.chartjs-render-monitor': {
        marginBottom: 15,
    },
    '@media (min-width: 768px)':
    {
        '.chartjs-render-monitor': {
            marginBottom: 20
        }
    }
    
});

const Chart = ({ data, country }) =>
{
    return (
        <div css={chart}>
            {
                country ? <BarChart data={data} /> : <LineChart />
            }
        </div>
    )
};

export default Chart;