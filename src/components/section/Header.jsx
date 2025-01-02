import React, {useState} from 'react';

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';

const Header = () => {
    const [ isMenuActive, setIsMenuActive ] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }

    return (
        <header id='header' role='banner' className= {`fixed left-0 top-0 w-64 h-full overflow-y-auto z-[10000] max-md:-left-64 bg-navback max-md:transition-position ${isMenuActive ? 'max-md:left-0' : 'max-md:-left-64'}`}>
            <Logo toggleMenu={toggleMenu} />
            <Menu />
            <Sns />
        </header>
    );
};

export default Header;