import React from 'react'
import Main from '../section/Main.jsx'
import Today from '../contents/Today.jsx'
import Developer from '../contents/Developer.jsx'
import VideoSlider from '../videos/VideoSlider.jsx'

import { webdText } from '../../data/webd.js'
import { websiteText } from '../../data/website.js'
import { gsapText } from '../../data/gsap.js'
import { portfolioText } from '../../data/port.js'
import { youtubeText } from '../../data/youtube.js'

const Home = () => {
    return (
        <Main
        title = "김으엉"
        description="알고리즘에 오신 것을 환영합니다.">

            <Today />
            <Developer />
            <VideoSlider videos={webdText} title='웹디자인기능사' id='webd' />
            <VideoSlider videos={websiteText} title='웹표준' id='web' />
            <VideoSlider videos={gsapText} title='GSAP 패럴랙스' id='gsap' />
            <VideoSlider videos={portfolioText} title='포폴 예시' id='portfolio' />
            <VideoSlider videos={youtubeText} title='코딩영상' id='youtube' />
        </Main>
    )
}
    
export default Home;