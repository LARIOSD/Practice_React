/* eslint-disable no-unused-vars */
const apyKey = 'A7qGN9w5G9jkIUdFmC1lt7d6voEVXVbR&q';

export default function getGifs({ keyword = 'anime' }) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apyKey}=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifList = data.map((image) => {
        const { title, id } = image;
        const { url } = image.images.downsized_medium;
        return { title, id, url };
      });
      return gifList;
    });
}
