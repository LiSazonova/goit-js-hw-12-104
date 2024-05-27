import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imagesList = document.querySelector('.images-container');

let lightbox;

export function renderImages(images) {
    const imageMarkup = images
        .map(
            img => `<li class="gallery-item">
      <a class="gallery-link" href="${img.largeImageURL}">
        <img 
          class="gallery-image" 
          width="360"
          src="${img.webformatURL}" 
          alt="${img.tags}" 
          />

      </a>
      <ul class='description'>
      <li><strong>Likes</strong> ${img.likes}</li>
      <li><strong>Views</strong> ${img.views}</li>
      <li><strong>Comments</strong> ${img.comments}</li>
      <li><strong>Downloads</strong> ${img.downloads}</li>
      </ul>
    </li>`
        )
        .join('');

    imagesList.insertAdjacentHTML('beforeend', imageMarkup);
}

export function initializeLightbox() {
    lightbox = new SimpleLightbox('.images-container a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}

export function refreshLightbox() {
    if (lightbox) {
        lightbox.refresh();
    } else {
        initializeLightbox();
    }
}