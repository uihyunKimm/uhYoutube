const axios = require('axios');

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': '5d06e77cc0mshc6da274eb7907dep158fd1jsn65ed7acf2b58',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const fetchFromApi = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data)
    return data;
}