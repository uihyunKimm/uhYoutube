import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import Main from "../contents/section/Main";

import VideoSearch from "../videos/VideoSearch";
import { fetchFromAPI } from "../../utils/api";

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken ] = useState(null);
    const [ visibleVideos, setVisibleVideos ] = useState(15);
    const [ loading, setLoading ] = useState(true); 
    
    useEffect(() => {
        setVideos([]);
        setLoading(true);
        fetchVideos(searchId);
        }, [searchId]);
        
        /*
        const fetchVideos = (query, pageToken = '') => {
            fetchFromAPI(query, pageToken)
                .then((data) => {
                    if (Array.isArray(data.items)) {
                        setNextPageToken(data.nextPageToken);  // 다음 페이지 토큰 설정
                        setVideos((prevVideos) => [...prevVideos, ...data.items]);  // 비디오 목록 갱신
                    } else {
                        console.error('Error: data.items is not an array', data);
                        setVideos([]);  // items가 없으면 빈 배열로 처리
                    }
                    setLoading(false);  // 로딩 종료
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    setLoading(false);  // 에러 발생 시 로딩 종료
                });
        }; */

        const fetchVideos = async (query, pageToken = '') => {
            fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${query}&type=video&pageToken=${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
            )
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data.items)) {
                setNextPageToken(data.nextPageToken); // 다음 페이지 토큰 설정
                setVideos((prevVideos) => [...prevVideos, ...data.items]); // 비디오 목록 갱신
                console.log('Fetched data:', data); // API 응답 확인
                setNextPageToken(data.nextPageToken || null); // nextPageToken 설정
                } else {
                    console.error('Error: data.items is not an array', data);
                    setVideos([]); // items가 없으면 빈 배열로 처리
                }
                setLoading(false); // 로딩 종료
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); // 에러 발생 시 로딩 종료
            });
        };

        const handleLoadMore = () => {
            if (nextPageToken) {
                fetchVideos(searchId, nextPageToken); // 다음 페이지 데이터 로드
            }
        };
        const handleLoadMore2 = () => {
            setVisibleVideos((prevCount) => prevCount + 15);
        };
        
        const searchPageClass = loading ? 'isLoading' : 'isLoaded';

        
    return (
        <Main title='유튜브 검색' description='youtube search result'>
            <section id='search' className={searchPageClass}>
                <div className='video__inner grid grid-cols-5 gap-4 justify-between max-xl:grid-cols-4 max-xl:gap-4 max-lg:grid-cols-3 max-lg:gap-3 max-sm:grid-cols-2 max-sm:gap-2 max-[480px]:grid-cols-1 min-h-svh'>
                    <VideoSearch videos={videos.slice(0, visibleVideos)}/>
                </div>
                <div className="video__more w-full flex justify-center items-center cursor-pointer">
                    <button onClick={handleLoadMore2} className="w-24 p-2 border-[1.5px] border-navback-darkfont hover:border-navback-font text-navback-darkfont hover:text-navback-font transition-all mb-6 cursor-pointer rounded-full">더 보기</button>
                </div>
            </section>
        </Main>
    )
}

export default Search