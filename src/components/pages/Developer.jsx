import React,{useState,useEffect} from 'react'
import Main from '../contents/section/Main';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { developerText } from '../../data/developer'
import { Link } from 'react-router-dom';

const Developer = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const developerClass = loading ? 'isLoading' : 'isLoaded';
    
    return (
        <Main 
            title = "추천 개발자"
            description=" 추천 유튜버">
            <section id='developer' className={`${developerClass}`}>
                <h2>개발자 유튜버 모음</h2>
                <div className="developer__inner flex flex-wrap max-xl:justify-center max-md:mt-16 w-full h-full">
                    {developerText && developerText.map((developer, key) => (
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
                    ))}
                </div>
            </section>
        </Main>
    )
}
    
export default Developer