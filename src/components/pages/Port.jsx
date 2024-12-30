import React,{useState, useEffect} from 'react'
import Main from '../contents/section/Main'

import { portfolioText } from '../../data/port'
import VideoCard from '../videos/VideoCard'

const Port = () => {
        const [loading,setLoading] = useState(true);
    
        useEffect(() =>{
            setTimeout(() =>{
                setLoading(false);
            }, 300)
        },[]);
    
        const portClass = loading ? 'isLoading' : 'isLoaded';
    
        return (
        <Main title="추천 영상" description="오늘의 추천 영상입니다.">
            <section id='portfolio' className={portClass}>
                <h2>포트폴리오</h2>
                <div className='video__inner grid grid-cols-5 gap-4 justify-between max-xl:grid-cols-4 max-xl:gap-4 max-lg:grid-cols-3 max-lg:gap-3 max-sm:grid-cols-2 max-sm:gap-2 max-[480px]:grid-cols-1'>
                    <VideoCard videos={portfolioText}/>
                </div>
            </section>
        </Main>
    )
}
    
export default Port