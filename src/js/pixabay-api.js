import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44085947-f129bb4457b00ce47b6639669';

export async function fetchData(query, page, perPage) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      per_page: perPage,
      page: page,
      safesearch: true,
      orientation: 'horizontal',
    },
  });
  return response.data;
}
