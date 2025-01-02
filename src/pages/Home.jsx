import React from 'react'
import Main from '../components/section/Main.jsx'
import Today from '../components/contents/Today.jsx'
import Developer from '../components/contents/Developer.jsx'
import VideoSlider from '../components/videos/VideoSlider.jsx'

import { webdText } from '../data/webd.js'
import { websiteText } from '../data/website.js'
import { gsapText } from '../data/gsap.js'
import { portfolioText } from '../data/port.js'
import { youtubeText } from '../data/youtube.js'
import { developerText } from '../data/developer.js'
import { todayText } from '../data/today.js'

const Home = () => {
    return (
        <Main
        title = "김으엉"
        description="알고리즘에 오신 것을 환영">

            <Today videos={todayText} id='today' />
            <Developer videos={developerText} title='개발자 유튜브' id='developer' />
            <VideoSlider videos={webdText} title='웹디자인기능사' id='webd' />
            <VideoSlider videos={websiteText} title='웹표준' id='web' />
            <VideoSlider videos={gsapText} title='GSAP 패럴랙스' id='gsap' />
            <VideoSlider videos={portfolioText} title='포폴 예시' id='portfolio' />
            <VideoSlider videos={youtubeText} title='코딩영상' id='youtube' />
        </Main>
    )
}
    
export default Home;