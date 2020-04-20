import React from 'react';
import { css } from '@emotion/core';
import LineChart from './LineChart';
import BarChart from './BarChart';

const chart = css({
    gridArea: 'chart',
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