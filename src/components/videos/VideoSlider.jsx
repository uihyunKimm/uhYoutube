import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation} from 'swiper/modules';

const VideoSlider = ({videos, title, id}) => {
    
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1000);
    },[]);

    const youtubeClass = loading ? 'isLoading opacity-0':'isLoaded opacity-100';
    
  return (
    <section id={id} className={`${youtubeClass} transition-opacity duration-500`}>
        <h2>{title}</h2>
        <div className='video__slider'>
            <Swiper 
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className={`mySwiper-${id}`}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1600: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}
            >
                {videos && videos.map((video, key)=>(
                    <SwiperSlide key={key}>
                        <div className='video mb-5 rounded-md overflow-hidden text-navback-darkfont hover:text-navback-font' key={key}>
                            <div className='video__thumb play-icon'>
                                <Link to={`video/${video.videoId}`} className='mb-2'>
                                <img src={video.img} alt={video.title}/>
                                </Link>
                                <div className='leading-tight font-light line-clamp-3'>{video.title}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default VideoSlider