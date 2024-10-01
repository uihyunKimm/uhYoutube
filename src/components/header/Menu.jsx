import React from 'react'

import { headerMenus, searchKeyword } from '../../data/header'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
    const location = useLocation();

    return (
        <nav id='header__menu' className='py-2 px-0'>
            <ul id='menu' className='border-b-[1px] #fff'>
                {headerMenus.map((menu, key) => (
                    <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword p-5'>
                {searchKeyword.map((keyword, key) => (
                    <li key={key} className='inline-block'>
                        <Link to={keyword.src}  className={`inline-block py-2 px-4 border-[1px] border-solid border-white/20 text-[0.8rem] rounded-full mx-[1px] my-[3px] transition-all duration-300 hover:bg-white/15  ${location.pathname === keyword.src ? 'active bg-white/10' : ''}`}>
                            {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu