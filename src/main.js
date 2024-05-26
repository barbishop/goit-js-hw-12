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

iziToast.settings({
  messageColor: '#fafafb',
  position: 'topRight',
  backgroundColor: '#ef4040',
  iconColor: '#fafafb',
  close: false,
});

let lightbox;

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = queryInput.value.trim();

  if (query === '') {
    showMessage('Please enter a search query.');
    return;
  }

  gallery.innerHTML = '';

  showLoader();

  fetchData(queryInput.value.trim())
    .then(images => {
      if (images.hits.length === 0) {
        showMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      } else {
        renderGallery(images);
      }
      if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
        });
      } else {
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
});
