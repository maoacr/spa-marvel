import favourites from '../assets/images/favourites.png';
import getData from '../utils/getData';
import getComic from '../utils/getComic';

// const searchBar = null || document.getElementById('searchBar');
// console.log(searchBar);

const Home = async () => {
  const characters = await getData();

  
  const view = `
      <section class="Favorites-section">
      <div class="Favorites-title">
        <img src=${favourites}/>
        <h2>My Favourites</h2>
      </div>
      <div class="Favorites-comics" id="Favorites-comics"></div>
    </section>

    <div class="Characters">
      ${characters.data.results.map(character => `
        <article class="Character-card">
          <div class="Character-data">
            <a href="#/${character.id}/">
              <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" />
            </a>
            <div class="Character-info">
              <h3>${character.name}</h3>
              <p class="description" >${character.description}</p>
              <button>VIEW MORE</button>
            </div>
          </div>
          <div class="Character-comics">
            <h4>Related comics</h4>
            ${
              character.comics.items.map(comic => `
                <button onclick="clickButton(event, '${comic.resourceURI}')" >${comic.name}</button>
              `).join('')
            }
          </div>
        </article>
      `).join('')}
    </div>
  `
  return view;
}

export default Home;