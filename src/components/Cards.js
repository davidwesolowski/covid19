import React from 'react';
import { css } from '@emotion/core';
import Card from './Card';

const cards = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'cards',
    width: 'auto',
    //minWidth: '100%',
    '@media (min-width: 768px)':{
        flexDirection: 'row',
    }
});

const Cards = ({ data }) =>
{
    const { confirmed, deaths, recovered, lastUpdate, today } = data;
    return (
        confirmed && (<div css={cards}>
            <Card 
                title="Zachorowań" 
                date={lastUpdate} 
                countToday={today.confirmed} 
                countOverall={confirmed.value} 
                styleColor="#d50000" 
                description="Liczba osób zarażonych koronawirusem"
            />
            <Card 
                title="Zgonów" 
                date={lastUpdate}
                countToday={today.deaths} 
                countOverall={deaths.value} 
                styleColor="#4a148c" 
                description="Liczba osób zmarłych z powodu koronawirusa"
            />
            <Card 
                title="Wyzdrowień" 
                date={lastUpdate}
                countToday={today.recovered} 
                countOverall={recovered.value}
                styleColor="#43a047" 
                description="Liczba osób wyzdrowiałych z koronawirusa"
            />
        </div>)
    )
};

export default Cards;