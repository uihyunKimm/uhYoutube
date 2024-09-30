import React from 'react'

const Logo = () => {
    return (
        <h1 className='border-b-[1px] border-white/10 '>
            <a href="/" className='flex p-2 m-2'>
                <em className='absolute w-8 h-8 mt-1 block border-solid border-[0.5px] border-gray-400 mr-2 animate-spin-logo aria-hidden'></em>
                <em className='absolute w-8 h-8 mt-1  block border-solid border-[0.5px] border-gray-500 mr-2 animate-spin-logo2 aria-hidden'></em>
                <em className='absolute w-8 h-8 mt-1  block border-solid border-[0.5px] border-gray-600 mr-2 animate-spin-logo3 aria-hidden'></em>
                <span className='pl-12 text-xl font-poppins leading-none font-normal'>UIHKK <p className='text-xl font-poppins leading-none font-thin text-white/70'>Link storage</p></span>
            </a>
        </h1>
    )
}

export default Logo