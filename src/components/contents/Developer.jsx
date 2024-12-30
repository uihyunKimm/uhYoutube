import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom';


import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Developer = ({videos, title, id}) => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const developerClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <section id={id} className={developerClass}>
            <h2>{title}</h2>
            <div className="developer__inner flex flex-wrap max-xl:justify-center max-md:mt-16">
                <Swiper 
                slidesPerView={4}
                spaceBetween={15}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                    },
                    1240: {
                        slidesPerView: 8,
                        spaceBetween: 20,
                    },
                    1640: {
                        slidesPerView: 9,
                        spaceBetween: 20,
                    },
                    2000: {
                        slidesPerView: 10,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation, Autoplay]}
                className='mySwiper'
                >
                    {videos && videos.map((developer, key) => (
                        <SwiperSlide key={key}>
                            <div className="developer mr-4 max-xl:mr-0" key={key}>
                                <div className="developer__img play-icon w-36 h-36 rounded-[50%] overflow-hidden mb-2 max-xl:w-32 max-xl:h-32 max-xl:mx-auto max-xl:my-2">
                                    <Link cl to={`/channel/${developer.channelId}`}>
                                        <img src={developer.img} alt={developer.name} />
                                    </Link>
                                </div>
                                <div className="developer__info w-36 pb-10 text-center line-clamp-1 whitespace-nowrap">
                                    <Link  to={`/channel/${developer.channelId}`}>
                                        {developer.name}
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
    
export default Developer