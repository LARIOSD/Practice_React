export default async function getGifs(category) {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=A7qGN9w5G9jkIUdFmC1lt7d6voEVXVbR`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifts = data.map((img) => ({
    id    : img.id,
    title : img.title,
    url   : img.images.downsized_medium.url,
  }));
  return gifts;
}
