import { snsLink } from '../../data/header'

const Search = () => {
    return (
        <div id='search'>
            <div className='relative w-full h-20 px-4 py-10 border-b-[1px] border-solid border-black/50'>
                <label htmlFor='searchInput' className='w-6 h-6 absolute left-12 top-6 bg-cover '>
                    <span className='ir'>검색</span>
                </label>
                <input 
                    type='search' 
                    id='searchInput' 
                    placeholder='검색어를 입력해주세요' 
                    autoComplete='off' 
                    className='bg-black border-[1px] border-solid border-black w-full px-4 py-12 rounded-2xl text-base text-white' 
                />
            </div>
        </div>
    )
}

export default Search