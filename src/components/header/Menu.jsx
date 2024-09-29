import React from 'react'

import { headerMenus, searchKeyword } from '../../data/header'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
    const location = useLocation();

    return (
        <nav id='header__menu' className='py-2 px-0 '>
            <ul id='menu' className='border-b-[1px] #fff'>
                {headerMenus.map((menu, key) => (
                    <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                {searchKeyword.map((keyword, key) => (
                    <li key={key}>
                        <Link to={keyword.src}  className={location.pathname === keyword.src ? 'active flex p-2 m-2' : 'flex p-2 m-2'}>
                            {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu