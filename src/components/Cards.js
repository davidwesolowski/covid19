import React from 'react';
import { css } from '@emotion/core';
import Card from './Card';

const cards = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'cards',
    '@media (min-width: 768px)':{
        flexDirection: 'row',
    }
});

const Cards = ({ data }) =>
{
    const { confirmed, deaths, recovered, lastUpdate } = data;
    return (
        confirmed && (<div css={cards}>
            <Card title="Zachorowań" date={lastUpdate} count={confirmed.value} styleColor="#d50000" description="Liczba osób zarażonych koronawirusem"/>
            <Card title="Zgonów" date={lastUpdate} count={deaths.value} styleColor="#4a148c" description="Liczba osób zmarłych z powodu koronawirusa"/>
            <Card title="Wyzdrowień" date={lastUpdate} count={recovered.value} styleColor="#43a047" description="Liczba osób wyzdrowiałych z koronawirusa"/>
        </div>)
    )
};

export default Cards;