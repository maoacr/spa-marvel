const Character = () => {
  const view = `
    <div class="Characters-details">
      <article class="Characters-data">
        <img src="image" alt="name" />
        <h2>Name</h2>
        <p>Description</p>
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