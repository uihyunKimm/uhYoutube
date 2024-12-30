import React,{useState, useEffect} from 'react'
import Main from '../contents/section/Main'

import { todayText } from '../../data/today'
import { Link } from 'react-router-dom'

const Today = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const todayClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main title="추천 영상" description="오늘의 추천 영상입니다.">
            <section id='todayPage' className={`${todayClass} p-10 max-md:mt-16`}>
                <h2>오늘의 추천 영상</h2>
                {todayText && todayText.map((today,key)=>(
                    <div key={key} className='today__inner rounded-md overflow-hidden flex bg-navback-900 mb-[3.125rem] max-lg:flex-col'>
                        <div className='today__thumb play__icon w-2/5 max-2xl:w-[480px] max-xl:w-full'>
                            <Link to={today.page}>
                                <img src={today.img} alt={today.title} />
                            </Link>
                        </div>
                        <div className='today__text w-3/5 p-[2rem] max-2xl:w-[calc(100%-480px)] max-xl:w-full bg-navback-900'>
                            <span className='today bg-navback py-1 px-12 rounded-2xl uppercase mb-2 inline-block text-navback-font'>today!</span>
                            <h3 className='title text-navback-font text-[2rem] mb-[1rem] line-one max-xl:text-2xl'>{/* line-one */}
                                <Link to={today.page}>{today.title}</Link>
                            </h3>
                            <p className='desc mb-[1rem] text-navback-darkfont line-clamp-4 max-2xl:line-clamp-2 max-xl:hidden'>{today.desc}</p>
                            <div className='info'>
                                <span className='text-[1rem] mr-2 text-navback-darkfont font-black underline underline-offset-0 uppercase '>
                                    <Link to={`/channel/${today.channelId}`}>{today.author}</Link>
                                </span>
                                <span className='text-[0.8rem] text-navback-darkfont '>{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    )
}
    
export default Today