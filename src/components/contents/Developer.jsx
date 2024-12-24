import React from 'react'

import {developerText} from '../../data/developer'
import {Link} from 'react-router-dom';

const Developer = () => {
    return (
        <section id='developer'>
            <h2>😪 추천 개발자를 소개합니다.</h2>
            <div className="flex flex-wrap w-full h-48 overflow-hidden xl:justify-center md:mt-8">
                {developerText.map((developer, key) => (
                    <div className="mr-4 xl:mr-0" key={key}>
                        <div className="w-36 h-36 rounded-[50%] overflow-hidden mb-2 xl:w-32 xl:h-32 xl:mx-auto xl:my-2">
                            <Link cl to={`/channel/${developer.channelId}`}>
                                <img src={developer.img} alt={developer.name} />
                            </Link>
                        </div>
                        <div className="flex w-40 pb-10 text-center">
                            <Link className='' to={`/channel/${developer.channelId}`}>
                                {developer.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
    
export default Developer