import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import Main from "../contents/section/Main";

import VideoSearch from "../videos/VideoSearch";

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);

    useEffect(()=> {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,)
       .then(response => response.json())
       .then(result => {
        console.log(result);
        setVideos(result.items);
       })
       .catch(error => console.log(error));
        },[searchId]);

    return (
        <Main title='유튜브 검색' description='youtube search result'>
            <section id='search'>
                <div className='video__inner grid grid-cols-5 gap-4 justify-between max-xl:grid-cols-4 max-xl:gap-4 max-lg:grid-cols-3 max-lg:gap-3 max-sm:grid-cols-2 max-sm:gap-2 max-[480px]:grid-cols-1 min-h-svh'>
                    <VideoSearch videos={videos}/>
                </div>
            </section>
        </Main>
    )
}

export default Search