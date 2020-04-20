import React from 'react';
import { css } from '@emotion/core';

const header = css({
    display: 'flex',
    justifyContent: 'center',
    gridArea: 'header',
    padding: 3,
    '@media (min-width: 768px)':{
		padding: 8
    }
});

const logo = css({
    filter: 'invert(100%)'
});

const Header = () => (
    <header css={header}>
        <img src="/logo.png" alt="covid19" css={logo}/>
    </header>
);

export default Header;