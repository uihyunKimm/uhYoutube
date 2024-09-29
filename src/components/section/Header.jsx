import React, {useState} from 'react';

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';

const Header = () => {
    return (
        <header id='header' role='banner' className='fixed left-0 top-0 w-64 h-full z-50 bg-black'>
            <Logo />
            <Menu />
            <Sns />
        </header>
    );
};

export default Header;