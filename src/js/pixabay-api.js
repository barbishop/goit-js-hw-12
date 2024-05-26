export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '44085947-f129bb4457b00ce47b6639669';

export function fetchData(query) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&per_page=15&safesearch=true&orientation=horizontal`
  ).then(responce => {
    if (!responce.ok) {
      throw new Error(response.statusText);
    }
    return responce.json();
  });
}
