import favourites from '../assets/images/favourites.png';

const Favorites = () => {
  const view = `
    <section class="Favorites-section">
      <div>
        <img src=${favourites}/>
        <h2>Favourites</h2>
      </div>
      <div class="Favorites-comics" id="Favorites-comics">
      </div>
    </section>
  `
  return view
}

export default Favorites