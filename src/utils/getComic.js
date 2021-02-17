// const apiKey = '?ts=1&apikey=d5392ff299f198e05c35b046776d7239&hash=78097a6c15f6c147bbd261fa17a89f81';
const apiKey = '?&ts=1&apikey=8660a9653c48352efcc5d14ec6f25ad0&hash=4ae2058f54a8cead64ec6bf729ca6bbd';

const getComic = async (link) => {
  const linkComic = `${link}${apiKey}`
  try {
    const response = await fetch(linkComic);
    const data = await response.json();
    const comic = data.data.results[0]
    return comic;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getComic;