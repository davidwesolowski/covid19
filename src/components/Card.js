import React from 'react';
import { css } from '@emotion/core';
import CountUp from 'react-countup';
import moment from 'moment-timezone';
import 'moment/locale/pl';

const card = css({
    border: '1px solid #424242',
    padding: 5,
    borderRadius: 15,
    width: '100%',
    marginRight: 0,
    textAlign: 'center',
    p: {
        fontSize: '1.2rem'
    },
    '@media (min-width: 768px)':{
        flexBasis: '25%',
        padding: 10,
        marginRight: 10,
        p: {
            fontSize: '1rem'
        }
    }
    
});

const Card = ({ title, count, date, description, styleColor }) =>
{

    const time = moment(date).tz('Europe/Warsaw').format('D MMMM YYYY, kk:mm');
    return (
        <div css={css`
            ${card};
            border-bottom: 15px solid ${styleColor};
        `}>
            <h2>{title}</h2>
            <h1><CountUp start={0} end={count} duration={2.75} delay={0.2}/></h1>
            <p>{time}</p>
            <p>{description}</p>
        </div>
    );
};

export default Card;