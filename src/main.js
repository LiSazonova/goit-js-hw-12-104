import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchImage } from "./js/pixabay-api";
import { renderImages, initializeLightbox, refreshLightbox } from "./js/render-functions";

const form = document.querySelector('.form');
const imagesList = document.querySelector('.images-container');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more');

let query = '';
let page = 1;

form.addEventListener('submit', async e => {
    e.preventDefault();

    imagesList.innerHTML = '';
    loadMoreButton.style.display = 'none';
    page = 1;
    query = e.target.elements.query.value.trim();

    if (!query) {
        iziToast.error({
            message: 'Search field is empty',
            position: 'topRight',
        });
        return;
    }

    showLoader('initial');

    try {
        const data = await searchImage(query, page);
        if (!data.hits.length) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
        } else {
            renderImages(data.hits);
            initializeLightbox();
            refreshLightbox();
            if (data.hits.length === 15) {
                loadMoreButton.style.display = 'block';
            }
        }
    } catch (error) {
        iziToast.error({
            message: 'An error occurred while fetching images. Please try again later.',
            position: 'topRight',
        });
    } finally {
        hideLoader('initial');
    }

    form.reset();
});

loadMoreButton.addEventListener('click', async () => {
    page += 1;
    showLoader('more');

    try {
        const data = await searchImage(query, page);
        if (data.hits.length) {
            renderImages(data.hits);
            refreshLightbox();
            if (data.hits.length < 15) {
                loadMoreButton.style.display = 'none';
            }
        }

        const card = document.querySelector(".gallery-item");
        const cardHeight = card.getBoundingClientRect().height * 2;
        window.scrollBy({
            left: 0,
            top: cardHeight,
            behavior: "smooth"
        })
    } catch (error) {
        iziToast.error({
            message: 'An error occurred while fetching images. Please try again later.',
            position: 'topRight',
        });
    } finally {
        hideLoader('more');
    }
});

function showLoader(type) {
    if (type === 'initial') {
        loader.style.display = 'block';
    } else if (type === 'more') {
        loader.style.display = 'block';
    }
}

function hideLoader(type) {
    if (type === 'initial') {
        loader.style.display = 'none';
    } else if (type === 'more') {
        loader.style.display = 'none';
    }
}