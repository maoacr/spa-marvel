// const API = 'https://gateway.marvel.com:443/v1/public/characters?limit=10&apikey=d5392ff299f198e05c35b046776d7239'
const API = 'https://gateway.marvel.com:443/v1/public/characters?limit=10&ts=1&apikey=8660a9653c48352efcc5d14ec6f25ad0'
// hash 4ae2058f54a8cead64ec6bf729ca6bbd
const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;