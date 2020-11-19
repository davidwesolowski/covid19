import React from 'react';
import { css } from '@emotion/core';
import CountUp from 'react-countup';
import moment from 'moment-timezone';
import 'moment/locale/pl';

const card = css({
    border: '1px solid #424242',
    padding: 5,
    borderRadius: 15,
    minWidth: '100%',
    marginRight: 0,
    marginBottom: 5,
    textAlign: 'center',
    '@media (min-width: 768px)':{
        flexBasis: '27%',
        padding: 10,
        marginRight: 10,
        marginBottom: 0,
        p: {
            fontSize: '1rem'
        },
        minWidth: 'auto'
    },
});

const cardTitle = css({
    fontSize: '1.5em !important',
    margin: '5px 0',
});

const cardResults = css({
    fontSize: '1.7em !important',
    margin: '5px 0',
});

const cardDescTime = css({
    fontSize: '1em !important',
    margin: '5px 0',
});

const Card = ({ title, countOverall, date, description, styleColor, countToday }) =>
{
    const time = moment(date).tz('Europe/Warsaw').format('D MMMM YYYY, kk:mm');
    return (
        <div css={css`
            ${card};
            border-bottom: 15px solid ${styleColor};
        `}>
            <h2 css={cardTitle}>{title}</h2>
            <h1 css={cardResults}>
                Dzisiaj: <CountUp start={0} end={countToday} duration={2.75} delay={0.2}/>
            </h1>
            <h1 css={cardResults}>
                Łącznie: <CountUp start={0} end={countOverall} duration={2.75} delay={0.2}/>
            </h1>
            <p css={cardDescTime}>{time}</p>
            <p css={cardDescTime}>{description}</p>
        </div>
    );
};

export default Card;