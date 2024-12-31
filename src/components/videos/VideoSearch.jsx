import React from 'react'
import { Link } from 'react-router-dom'

const VideoSearch = ({ videos, visibleVideos }) => {
    return (
      <>
        {videos && videos.slice(0, visibleVideos).map((video, index) => (
            <div
                className={`video mb-10 rounded-md overflow-hidden bg-navback-900 max-sm:mb-2 ${index < visibleVideos ? 'visible' : ''}`}
                key={video.id.videoId}
            >
                <div className="video__thumb play-icon">
                <Link
                    to={`video/${video.id.videoId}`}
                    className="relative block cursor-pointer w-full pb-[56%] bg-cover bg-center"
                    style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
                ></Link>
                </div>
                <div className="video__info py-2 px-4 text-navback-font">
                <div className="title text-base/3 line-clamp-2">
                    <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                </div>
                <div className="info flex justify-between items-center h-full">
                    <span className="author line-clamp-1 text-navback-darkfont hover:text-navback-font">
                    <Link to={`/channel/${video.id.channelId}`}>{video.snippet.channelTitle}</Link>
                    </span>
                    <span className="author line-clamp-1 tracking-tighter text-navback-darkfont text-xs">
                    {video.snippet.publishedAt}
                    </span>
                </div>
                </div>
            </div>
            ))}
      </>
    );
  };
  
  export default VideoSearch;