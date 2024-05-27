import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchData } from './js/pixabay-api';
import {
  renderGallery,
  showMessage,
  showLoader,
  hideLoader,
} from './js/render-function.js';

const form = document.querySelector('.form');
const queryInput = document.querySelector('input[name="query"]');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

iziToast.settings({
  messageColor: '#fafafb',
  position: 'topRight',
  backgroundColor: '#ef4040',
  iconColor: '#fafafb',
  close: false,
});

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
let query = '';
let page = 1;
const perPage = 15;
let images;

form.addEventListener('submit', async event => {
  event.preventDefault();
  query = queryInput.value.trim();
  if (query === '') {
    showMessage('Please enter a search query.');
    return;
  }
  loadMoreBtn.classList.add('visually-hidden');
  gallery.innerHTML = '';
  page = 1;

  showLoader();

  try {
    images = await fetchData(query, page, perPage);
    if (images.hits.length === 0) {
      showMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      hideLoader();
      console.log(
        '🚀 ~ form.addEventListener ~ images.hits.length:',
        images.hits.length
      );
      return;
    }

    if (images.hits.length < 15) {
      loadMoreBtn.classList.add('visually-hidden');
    } else {
      loadMoreBtn.classList.remove('visually-hidden');
    }
    renderGallery(images.hits);
    lightbox.refresh();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
    form.reset();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  try {
    loadMoreBtn.classList.add('visually-hidden');
    showLoader();

    images = await fetchData(query, page, perPage);
    renderGallery(images.hits);
    lightbox.refresh();

    const galleryCard = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    const cardHeight = galleryCard.height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (images.total <= Math.ceil(page * perPage)) {
      loadMoreBtn.classList.add('visually-hidden');
      showMessage("We're sorry, but you've reached the end of search results.");
      return;
    }
    loadMoreBtn.classList.remove('visually-hidden');
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
});
