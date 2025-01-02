import React, {useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom"
import { fetchFromAPI } from "../utils/api";

import Main from "../components/section/Main";
import ReactPlayer from "react-player"

import { CiChat1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const Video = () => {
    const { videoId } = useParams();
    const [ videoDetail, setVideoDetail ] = useState(null);
    
    useEffect(() => {
        fetchFromAPI(`videos/part=snippet,statistics&id=${videoId}`)
        .then((data)=> {
            console.log(data);
            setVideoDetail(data.items[9])
            })
        }, [videoId]);
        
    return (
        <Main title='영상' description='youtube videos'>
            <section id='videoView' className="p-0 max-md:mt-20">
            {videoDetail && (
                    <div className='video__view'>
                        <div className='video__play w-full pb-[56%] relative'>
                            <ReactPlayer 
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`} 
                                width='100%' 
                                height='100%' 
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                        <div className='video__info p-10'>
                            <h2 className='video__title'>
                                {videoDetail.snippet.title}
                            </h2>
                            <div className='video__channel flex justify-between mb-10 py-2 px-7 rounded-3xl bg-black-500'>
                                <div className='id font-extrabold'>
                                    <Link to='/channel/'>{videoDetail.snippet.channelTitle}</Link>
                                </div>
                                <div className='count'>
                                    <span className='view rounded-[40px] text-sm/none ml-2 '><CiRead className='w-5 h-5 mr-1 -align-[5px]' />{videoDetail.statistics.viewCount}</span>
                                    <span className='like rounded-[40px] text-sm/none ml-2'><CiStar className='w-5 h-5 mr-1 -align-[5px]' />{videoDetail.statistics.likeCount}</span>
                                    <span className='comment rounded-[40px] text-sm/none ml-2'><CiChat1 className='w-5 h-5 mr-1 -align-[5px]' />{videoDetail.statistics.commentCount}</span>
                                </div>
                            </div>
                            <div className='video__desc whitespace-pre-line'>
                                {videoDetail.snippet.description}
                            </div>
                        </div>
                    </div>
                )}
               {/*  <div className='video__inner grid grid-cols-5 gap-4 justify-between max-xl:grid-cols-4 max-xl:gap-4 max-lg:grid-cols-3 max-lg:gap-3 max-sm:grid-cols-2 max-sm:gap-2 max-[480px]:grid-cols-1 min-h-svh'>
                    <VideoSearch videos={videos.slice(0, visibleVideos)}/>
                </div>
                <div className="video__more w-full flex justify-center items-center cursor-pointer">
                    <button onClick={handleLoadMore2} className="w-24 p-2 border-[1.5px] border-navback-darkfont hover:border-navback-font text-navback-darkfont hover:text-navback-font transition-all mb-6 cursor-pointer rounded-full">더 보기</button>
                </div> */}
            </section>
        </Main>
    )
}

export default Video