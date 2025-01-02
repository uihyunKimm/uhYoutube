import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/videos/VideoSearch'
import { youtubeText } from '../data/youtube'

const Youtube = () => {
        const [loading,setLoading] = useState(true);
    
        useEffect(() =>{
            setTimeout(() =>{
                setLoading(false);
            }, 300)
        },[]);
    
        const youtubeClass = loading ? 'isLoading' : 'isLoaded';
    
        return (
        <Main title="youtube" description="subscribe package">
            <section id='youtube' className={youtubeClass}>
                <h2>이 코딩을 영상으로</h2>
                <div className='video__inner grid grid-cols-5 gap-4 justify-between max-xl:grid-cols-4 max-xl:gap-4 max-lg:grid-cols-3 max-lg:gap-3 max-sm:grid-cols-2 max-sm:gap-2 max-[480px]:grid-cols-1'>
                    <VideoCard videos={youtubeText}/>
                </div>
            </section>
        </Main>
    )
}

export default Youtube