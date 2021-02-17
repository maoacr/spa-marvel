import marvel from '../assets/images/marvelLogo.png';
import search from '../assets/images/search.png';

const searchBar = null || document.getElementById('searchBar');
console.log(searchBar);

const Header = () => {
  const view = `
    <header>
      <div class="Header-logo">
        <a href="/">
          <img src="${marvel}" alt=Logo marvel"" />
        </a>
      </div>
      <div class="Header-search">
        <input 
          type="text"
          placeholder="Search character" 
          name="searchBar" 
          id="searchBar"/>
        <button type="submit"><img src="${search}" ></img></button>
      </div>
    </header>
  `
  return view;
}

export default Header;