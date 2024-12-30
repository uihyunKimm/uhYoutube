import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const Today = ({videos, id}) => {
    const [loading,setLoading] = useState(true);

    useEffect(()=> {
        setTimeout(()=> {
            setLoading(false);
        },300)
    },[])

    const todayClass = loading ? 'isLoading' : 'isLoaded'

    return (
        <section id={id} className={`${todayClass} p-10 max-md:mt-16`}>
            <div className='today__inner rounded-md overflow-hidden flex max-lg:flex-col'>
                <div className='play__icon w-2/5 max-2xl:w-[480px] max-xl:w-full'>
                    <Link to={videos[0].page}>
                        <img src={videos[0].img} alt={videos[0].title} />
                    </Link>
                </div>
                <div className='today__text w-3/5 p-[2rem] max-2xl:w-[calc(100%-480px)] max-xl:w-full bg-navback-900'>
                    <span className='today bg-navback py-1 px-12 rounded-2xl uppercase mb-2 inline-block text-navback-font'>today!</span>
                    <h3 className='title text-navback-font text-[2rem] mb-[1rem] line-one max-xl:text-2xl'>{/* line-one */}
                        <Link to={videos[0].page}>{videos[0].title}</Link>
                    </h3>
                    <p className='desc mb-[1rem] text-navback-darkfont line-clamp-4 max-2xl:line-clamp-2 max-xl:hidden'>{videos[0].desc}</p>
                    <div className='info'>
                        <span className='text-[1rem] mr-2 text-navback-darkfont font-black underline underline-offset-0 uppercase'>
                            <Link to={`/channel/${videos[0].channelId}`}>{videos[0].author}</Link>
                        </span>
                        <span className='text-[0.8rem] text-navback-darkfont '>{videos[0].date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
    
export default Today