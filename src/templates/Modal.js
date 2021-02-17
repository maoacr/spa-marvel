const Modal = (comic) => {
  const view = `
    <div class="Modal-container">
      <div class="Comic-data">
        <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}"/>
        <h1>${comic.title}</h1>
        <p>${comic.description}</p>
      </div>
      <div Comic-buttons>
        <button>ADD TO FAVORITES</button>
        <button>BUY FOR ${comic.prices.price}</button>
      </div>
      <p>${comic.title}</p>
    </div>
  `
  return view
}
export default Modal