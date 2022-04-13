const apyKey = 'A7qGN9w5G9jkIUdFmC1lt7d6voEVXVbR&q';
const limit = 30;
const offset = 0;
export default async function getGifs({ keyword = 'anime' }) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apyKey}=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en`;
  try {
    const response = await fetch(apiURL);
    const { data } = await response.json();
    const gifList = data.map((image) => {
      const { title, id } = image;
      const { url } = image.images.downsized_medium;
      return { title, id, url };
    });
    return gifList;
  } catch (error) {
    return error;
  }
}
