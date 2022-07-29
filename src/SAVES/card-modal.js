import refs from './refs';
import instanceFetchMovies from "./API";
const img_url = 'https://image.tmdb.org/t/p/w500';

refs.cardList.addEventListener('click', openModal);
refs.close_card_modal.addEventListener('click', closeModal);
refs.card_backdrop.addEventListener('click', onBackdropClick);


function openModal(event){
    if (event.target.nodeName !== "IMG") return;
    refs.card_backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPress);

    const id = event.target.dataset.id;

    const film = instanceFetchMovies.fetchMovieById(id).then(data => {
        
        const card = createMovieInfo(data);
        console.log("Hello");
        console.log(card);

        
    })
};

function closeModal(event){
    refs.card_backdrop.classList.add('is-hidden');
    window.removeEventListener('keydown', onEscPress);
};

function onBackdropClick(event){
    if (event.currentTarget !== event.target) return;
    closeModal();
}

function onEscPress(event){
    if (event.code !== "Escape")return;
    closeModal();
}


function createMovieInfo(data){
    const {backdrop_path, poster_path, genre_ids, release_date, title, id} = data;
    return `<div class="card_item">
    <img src="${img_url}${poster_path}" alt="${title}" data-id="${id}">
    <p class="title">${title}</p>
    <p class="year">${release_date.slice(0, 4)}</p>
    </div>`
}