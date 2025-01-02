import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api'

import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch';

import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const Channel = () => {
    const { channelId } = useParams();
    const [ channelDetail, setChannelDetail ] = useState();
    const [ channelVideo, setChannelVideo ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ nextPageToken,setNextPageToken ] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videosData = fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date`)
                setChannelVideo(videosData?.items)
                setNextPageToken(videosData?.nextPageToken);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchResults();
    }, [channelId]);

    const loadMoreVideos = async () => {
        if (nextPageToken) {
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
            setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
            setNextPageToken(videosData?.nextPageToken);
        }
    };

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "유튜브 채널"
            description="유튜브 채널페이지입니다.">
            
            <section id='channel' className={`${channelPageClass} p-0`}>
                {channelDetail && (
                    <div className='channel__inner'>
                        <div className="channel__header w-full h-72 bg-#969696 pt-24 relative bg-center after:content-[''] after:w-full after:h-full after:bg-#00000064 after:absolute after:left-0 after:top-0 " style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                            <div className='circle w-48 h-48 rounded-full overflow-hidden absolute left-1/2 top-36 -translate-x-1/2 z-[100]'>
                                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                            </div>
                        </div>
                        <div className='channel__info mt-24 text-center text-#fff'>
                            <h3 className='title mb-2'>{channelDetail.snippet.title}</h3>
                            <p className='desc text-#adadad py-0 px-[10vw] mb-8 break-words'>{channelDetail.snippet.description}</p>
                            <div className='info'>
                                <span className='bg-#a6a6a631 py-2 px-4 rounded-full m-1'><CiBadgeDollar className='w-5 h-5 mr-1 -align-[5px]' />{channelDetail.statistics.subscriberCount}</span>
                                <span className='bg-#a6a6a631 py-2 px-4 rounded-full m-1'><CiMedal className='w-5 h-5 mr-1 -align-[5px]' />{channelDetail.statistics.videoCount}</span>
                                <span className='bg-#a6a6a631 py-2 px-4 rounded-full m-1'><CiRead className='w-5 h-5 mr-1 -align-[5px]' />{channelDetail.statistics.viewCount}</span>
                            </div>
                        </div>
                        <div className='channel__video video__inner search p-10 mt-12'>
                            <VideoSearch videos={channelVideo} />
                        </div>
                        <div className='channel__more p-10'>
                            {nextPageToken && <button onClick={loadMoreVideos} className='w-full border-0 p-5 bg-#1a1a1a text-#fff mb-5 cursor-pointer rounded-full transition-all'>더 보기</button>}
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Channel