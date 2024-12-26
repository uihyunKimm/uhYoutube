import React from 'react'
import Main from '../section/Main'

import { webdText } from '../../data/webd'
import { Link } from 'react-router-dom'

const Webd = () => {
    return (
        <Main title="추천 영상" description="오늘의 추천 영상입니다.">
            <section id='webd'>
                <h2>웹디자인기능사 </h2>
                <div className='video__inner grid grid-cols-5 gap-4 justify-between max-xl:grid-cols-4 max-xl:gap-4 max-lg:grid-cols-3 max-lg:gap-3 max-sm:grid-cols-2 max-sm:gap-2 max-[480px]:grid-cols-1'>
                    {webdText && webdText.map((video, key) => (
                        <div className="video mb-5 text-navback-darkfont hover:text-navback-font" key={key}>
                            <div className="video__thumb play-icon">
                                <Link to={`/video/${video.videoId}`}>
                                    <img src={video.img} alt={video.title} className='mb-2' />
                                </Link>
                                    <div className='leading-tight font-light line-clamp-3'>{video.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}
    
export default Webd