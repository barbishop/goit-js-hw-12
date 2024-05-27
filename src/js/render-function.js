import iziToast from 'izitoast';

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(hit => {
      return `
        <li class="gallery-item">
            <a class="gallery-link" href="${hit.largeImageURL}" download=false>
                <img src="${hit.webformatURL}" alt="${hit.tags}" class="gallery-img" width=360 onclick="return false" data-source="${hit.largeImageURL}">
                <ul class="description">
                    <li>
                        <p>Likes</p>
                        <p class="description-value">${hit.likes}</p>
                    </li>
                    <li>
                        <p>Views</p>
                        <p class="description-value">${hit.views}</p>
                    </li>
                    <li>
                        <p>Comments</p>
                        <p class="description-value">${hit.comments}</p>
                    </li>
                    <li>
                        <p>Downloads</p>
                        <p class="description-value">${hit.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>
        `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

export function showMessage(message) {
  iziToast.show({ message });
}

export function showLoader() {
  document.querySelector('.loader').classList.remove('visually-hidden');
}

export function hideLoader() {
  document.querySelector('.loader').classList.add('visually-hidden');
}
