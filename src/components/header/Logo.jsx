import React from 'react'

const Logo = () => {
    return (
        <h1 className='border-b-[1px] border-white/10 '>
            <a href="/" className='flex p-2 m-2'>
                <em className='w-10 h-10 block bg-red-600 mr-2 animate-spin-logo aria-hidden'></em>
                <span className='text-xl font-poppins leading-none font-normal'>UIHKK <p className='text-xl font-poppins leading-none font-thin text-white/70'>Link storage</p></span>
            </a>
        </h1>
    )
}

export default Logo