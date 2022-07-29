const img_url = 'https://image.tmdb.org/t/p/w500';

export default function createCards(data) {
    return data.map(({backdrop_path, poster_path, genre_ids, release_date, title, id}) => {

        if(poster_path === null) return;
        
        return `<li class="card_item">
        <img src="${img_url}${poster_path}" alt="${title}" data-id="${id}">
        <p class="title">${title}</p>
        <p class="year">${release_date.slice(0, 4)}</p>
        </li>`;
    });
};