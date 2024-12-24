import React from 'react'
import Main from '../section/Main.jsx'
import Today from '../contents/Today.jsx'
import Developer from '../contents/Developer.jsx'
import Webd from '../contents/Webd.jsx'
import Website from '../contents/Website.jsx'
import Gsap from '../contents/Gsap.jsx'
import Portfolio from '../contents/Port.jsx'
import Youtube from '../contents/Youtube.jsx'

const Home = () => {
    return (
        <Main
        title = "김으엉"
        description="김으엉 블로그에 오신 것을 환영합니다.">
            <Today />
            <Developer />
            <Webd />
            <Website />
            <Gsap />
            <Portfolio />
            <Youtube />
        </Main>
    )
}
    
export default Home;