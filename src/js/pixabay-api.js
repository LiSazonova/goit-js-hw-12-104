import axios from 'axios';

export async function searchImage(query, page = 1) {

    const params = new URLSearchParams({
        key: '35791759-f811f161bd6e8c93b24d24d20',
        q: query,
        page: page,
        per_page: 15,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    try {
        const response = await axios.get(`https://pixabay.com/api/?${params}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}