import router from './routes/index';
import getComic from './utils/getComic';
import Modal from './templates/Modal';

const clickButton = async  (e, url) => {
  e.preventDefault();
  console.log('clickButton', url)
  const comic = await getComic(url);
  console.log(comic)
  const modal = Modal(comic);
  console.log(modal)
  const sectionModal = null || document.getElementById('modal');
  sectionModal.innerHTML = modal;
}

window.clickButton = clickButton;

window.addEventListener('load', router);
window.addEventListener('hashchange', router);