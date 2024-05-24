export function searchImage(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: '35791759-f811f161bd6e8c93b24d24d20',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    const url = `${BASE_URL}?${params}`;

    return fetch(url).then(res => res.json());
}