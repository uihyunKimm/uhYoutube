import React from 'react'

import {developerText} from '../../data/developer'
import {Link} from 'react-router-dom';

const Developer = () => {
    return (
        <section id='developer'>
            <h2>개발유튜버</h2>
            <div className="flex flex-wrap w-full h-48 overflow-hidden max-xl:justify-center max-md:mt-8">
                {developerText.map((developer, key) => (
                    <div className="developer mr-4 max-xl:mr-0" key={key}>
                        <div className="developer__img w-36 h-36 rounded-[50%] overflow-hidden mb-2 max-xl:w-32 max-xl:h-32 max-xl:mx-auto max-xl:my-2">
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
    )
}
    
export default Developer