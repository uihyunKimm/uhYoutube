import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/videos/VideoSearch'
import { websiteText } from '../data/website'

const Website = () => {   
        const [loading,setLoading] = useState(true);

        useEffect(() => {
            setTimeout (()=>{
                setLoading(false);
            }, 300);
        },[]);

        const websitePageClass = loading ? 'isLoading' : 'isLoaded';

        return (
        <Main title="웺사이트" description="웹사이트 제작.">
            <section id='website' className={websitePageClass}>
                <h2>웹사이트</h2>
                <div className='video__inner grid grid-cols-5 gap-4 justify-between max-xl:grid-cols-4 max-xl:gap-4 max-lg:grid-cols-3 max-lg:gap-3 max-sm:grid-cols-2 max-sm:gap-2 max-[480px]:grid-cols-1 '>
                    <VideoCard videos={websiteText}/>
                </div>
            </section>
        </Main>
    )
}
    
export default Website