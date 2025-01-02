import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {
    const [searchKeyword, setsearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(searchKeyword)
        if(searchKeyword){
            navigate(`/search/${searchKeyword}`);
            setsearchKeyword('');
        }
    }

    return (
        <div id='search'>
            <div className='relative w-full h-15 px-6 py-2.5 border-b-[1px] border-b-solid border-b-gray-900 max-md:fixed max-md:left-0 max-md:top-0 max-md:w-full max-md:z-[1000] max-md:backdrop-blur-md max-md:pr-5 max-md:pl-52 max-md:bg-navback max-md:border-b-[0.5px] max-md:border-white/10'>
                <label htmlFor='searchInput' className="w-6 h-6 absolute left-9 top-[18px] bg-cover text-nowrap bg-[url('https://webs-youtube.netlify.app/static/media/search.7a791d77d93a3a089a1d.svg')] max-md:left-56">
                    <span className='hidden whitespace-nowrap'>검색</span>
                </label>
                <input 
                    type='search' 
                    id='searchInput' 
                    placeholder='검색어를 입력해주세요' 
                    autoComplete='off' 
                    className='_input bg-[#232A3C] border-solid border-1px border-[#232A3C] w-full py-2 px-11 rounded-[40px] text-base text-navback-font placeholder:text-navback-darkfont max-md:py-2 max-md:pr-2 max-md:pl-12' 
                    onChange={e => setsearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === 'Enter'){
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Search