import React from 'react'

import { youtubeText } from '../../data/youtube'
import { Link } from 'react-router-dom'

const Youtube = () => {
    return (
        <section id='youtube'>
            <h2>이 코딩을 영상으로</h2>
            <div className='video__inner grid grid-cols-5 gap-4 justify-between max-xl:grid-cols-4 max-xl:gap-4 max-lg:grid-cols-3 max-lg:gap-3 max-sm:grid-cols-2 max-sm:gap-2 max-[480px]:grid-cols-1 '>
                {youtubeText && youtubeText.map((video, key) => (
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
    )
}

export default Youtube