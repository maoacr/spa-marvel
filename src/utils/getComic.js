const apiKey = '?ts=1&apikey=d5392ff299f198e05c35b046776d7239&hash=78097a6c15f6c147bbd261fa17a89f81';

const getComic = async (link) => {
  const linkComic = `${link}${apiKey}`
  try {
    const response = await fetch(linkComic);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getComic;