import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ toggleMenu }) => {
    return (
        <h1 className='header__logo border-b-[0.5px] border-white/10 max-md:fixed max-md:left-0 max-md:top-0 max-md:border-none'>
            <Link to="/" className='flex p-2 m-1'>
                <em className='absolute w-8 h-8 mt-1 block border-solid border-[0.5px] rounded-xl border-gray-400 mr-2 animate-spin-logo aria-hidden'></em>
                <em className='absolute w-8 h-8 mt-1 block border-solid border-[0.5px] rounded-xl border-gray-500 mr-2 animate-spin-logo2 aria-hidden'></em>
                <em className='absolute w-8 h-8 mt-1 block border-solid border-[0.5px] rounded-xl border-gray-600 mr-2 animate-spin-logo3 aria-hidden'></em>
                <em className='absolute w-8 h-8 mt-1 block border-solid border-[0.5px] rounded-xl border-gray-700 mr-2 animate-spin-logo4 aria-hidden'></em>
                <em onClick={toggleMenu} className='absolute w-8 h-8 mt-1 block border-solid border-[0.5px] rounded-xl border-gray-800 mr-2 animate-spin-logo5 aria-hidden'></em>
                <span className='pl-12 text-l font-nanumneo leading-none font-normal'>UIHKK <p className='text-l pt-1 m-0 font-nanumlight leading-none font-thin overflow-visible text-white/70'>Link storage</p></span>
            </Link>
        </h1>
    )
}

export default Logo