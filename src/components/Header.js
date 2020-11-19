import React from 'react';
import { css } from '@emotion/core';
import logoImg from '../img/logo.png';

const header = css({
    display: 'flex',
    justifyContent: 'center',
    gridArea: 'header',
    padding: '5px 3px',
    '@media (min-width: 768px)':{
        padding: 8,
    }
});

const logo = css({
    filter: 'invert(100%)',
    width: '100%',
    objectFit: 'contain',
    '@media (min-width: 768px)': {
        width: 'auto',
        objectFit: 'fill'
    }
});

const Header = () => (
    <header css={header}>
        <img src={logoImg} alt="covid19" css={logo}/>
    </header>
);

export default Header;