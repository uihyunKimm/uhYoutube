import React, {useState} from 'react';

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';

const Header = () => {
    return (
        <header id='header' role='banner' className='fixed left-0 top-0 w-64 h-full overflow-y-auto z-[10000] bg-navback max-md:-left-64 '>
            <Logo />
            <Menu />
            <Sns />
        </header>
    );
};

export default Header;