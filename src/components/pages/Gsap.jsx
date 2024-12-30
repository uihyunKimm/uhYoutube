import React, { useEffect, useState } from 'react'
import Main from '../contents/section/Main'

import { gsapText } from '../../data/gsap'
import VideoCard from '../videos/VideoCard'

const Gsap = () => {
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        setTimeout(() =>{
            setLoading(false);
        }, 300)
    },[]);

    const gsapClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main title="gsap" description="패럴랙스">
            <section id='gsap' className={gsapClass}>
                <h2>GSAP 패럴랙스 효과</h2>
                <div className='video__inner grid grid-cols-5 gap-4 justify-between max-xl:grid-cols-4 max-xl:gap-4 max-lg:grid-cols-3 max-lg:gap-3 max-sm:grid-cols-2 max-sm:gap-2 max-[480px]:grid-cols-1 '>
                    <VideoCard videos={gsapText}/>
                </div>
            </section>
        </Main>
    )
}
    
export default Gsap