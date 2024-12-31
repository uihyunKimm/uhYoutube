import React from 'react'

const MainShadow = () => {
    return (
      <div className='absolute bottom-[-1400px] left-[7%] w-full h-[80px] pl-64 overflow-visible z-0 max-md:-left-[5%]'>
          <div className='framer-will-change bg-custom-radial absolute left-[55%] bottom-[520px] w-[90%] h-[664px] rounded-lg opacity-80 overflow-hidden translate-x-[-50%] translate-y-[-50%] flex-none'></div>
          <div className='framer-will-change bg-custom-radial-2 absolute left-[55%] bottom-[548px] w-[90%] h-[618px] rounded-lg opacity-70 overflow-hidden translate-x-[-50%] translate-y-[-50%] flex-none'></div>
          <div className='framer-will-change bg-custom-radial-2 absolute left-[55%] bottom-[1060px] w-[55%] h-[364px] rounded-lg opacity-70 overflow-hidden translate-x-[-50%] flex-none'></div>
      </div>
    )
  };

export default MainShadow;
