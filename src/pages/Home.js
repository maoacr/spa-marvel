import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  
  const view = `
    <div class="Characters">
      ${characters.data.results.map(character => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" />
          </a>
        </article>
      `).join('')}
      </div>
  `
  return view;
}

export default Home;