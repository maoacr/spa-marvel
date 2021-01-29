const API = 'https://gateway.marvel.com:443/v1/public/characters?limit=10&apikey=d5392ff299f198e05c35b046776d7239';

const getDetail = async (id) => {
  const apiURl = id ? `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=d5392ff299f198e05c35b046776d7239&hash=78097a6c15f6c147bbd261fa17a89f81` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getDetail;