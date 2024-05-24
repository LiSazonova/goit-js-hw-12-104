
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchImage } from "./js/pixabay-api";
import { renderImages, initializeLightbox, refreshLightbox } from "./js/render-functions";


const form = document.querySelector('.form');
const imagesList = document.querySelector('.images-container');
const loader = document.querySelector('.loader');

form.addEventListener('submit', e => {
    e.preventDefault();

    imagesList.innerHTML = '';

    const query = e.target.elements.query.value.trim();

    if (!query) {
        iziToast.error({
            message: 'Search field is empty',
            position: 'topRight',
        });
        return;
    }

    showLoader();

    searchImage(query)
        .then(data => {
            if (!data.hits.length) {
                iziToast.error({
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                hideLoader();

            } else {
                setTimeout(() => {
                    renderImages(data.hits);
                    initializeLightbox();
                    refreshLightbox();
                    hideLoader();
                }, 2000);
            }
        }).catch(error => {
            hideLoader();
        })

    form.reset();
});

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}