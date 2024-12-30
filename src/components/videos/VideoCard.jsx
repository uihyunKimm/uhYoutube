import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({videos}) => {
  return (
        <>
            {videos && videos.map((video, index)=>(
                <div className='video mb-5 rounded-md overflow-hidden text-navback-darkfont hover:text-navback-font' key={index}>
                    <div className='video__thumb play-icon'>
                        <Link to={`video/${video.videoId}`} className='mb-2'>
                        <img src={video.img} alt={video.title}/>
                        </Link>
                        <div className='leading-tight font-light line-clamp-3'>{video.title}</div>
                    </div>
                </div>
            ))};
        </>
    )
}

export default VideoCard;