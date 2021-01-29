import getHash from '../utils/getHash';
import getDetail from '../utils/getDetail';

const Character = async () => {
  const id = getHash();
  const character = await getDetail(id);
  const view = `
    <div class="Characters-details">
      <article class="Characters-data">
        <img src="${character.data.results[0].thumbnail.path}.${character.data.results[0].thumbnail.extension}" alt="${character.data.results[0].name}" />
        <h2>${character.data.results[0].name}</h2>
        <p>${character.data.results[0].description}</p>
      </article class="Characters-comics">
      <article>
        <div class="Comic-container">
          <a href="" >
            <img src="comicImage" alt="comicName" />
            <h3>Comic name</h3>
          </a>
        </div>
      </article>
    </div>
  `
  return view;
}

export default Character;