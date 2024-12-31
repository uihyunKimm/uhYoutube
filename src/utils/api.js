import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '40'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

/* try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
} */

export const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data)
    return data;
}
/* export const fetchFromAPI = async(query, pageToken = '') => {
  try {
      const { data } = await axios.get(`${BASE_URL}/search`, {
          params: {
              part: 'snippet',
              q: query,  // 동적으로 q 값을 전달
              type: 'video',
              maxResults: '50',
              pageToken: pageToken,  // 페이지 토큰을 이용해 페이지네이션 처리
          },
          headers: {
              'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
              'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
          }
      });
      console.log(data);  // 데이터 확인용
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  } 
};*/