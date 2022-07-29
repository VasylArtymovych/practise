import * as genres from './genres.json';
console.log(genres);

const api_key = "9c009c00402fb866baf05bd346a2d01d";
const img_url = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = "https://api.themoviedb.org/3/";
const trending = "https://api.themoviedb.org/3/trending/movie/week?";
const discover = `https://api.themoviedb.org/3/discover/movie`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;

const card_list = document.querySelector('.card_list');
const btn_container = document.querySelector('.btn_container');

class FetchData {
    constructor(){
        this.page = 1;
    }

    async moviesFetch(){
        const response = await fetch(trending + new URLSearchParams({
            api_key: api_key,
            page: this.page,
        }))
        return response.json();
    }
    setpage(newPage){
        this.page = newPage;
    }
    increasePage(){
        this.page += 1;
    }
    decreasePage(){
        this.page -= 1;
    }
};

const getData = new FetchData();

function fetchAndRenderCards(page=1){
    card_list.innerHTML = '';

    getData.moviesFetch().then(({results, page, total_pages}) => {

        const markup = createCard(results).join('');
        card_list.insertAdjacentHTML('beforeend', markup);

        createPagination(page, total_pages);
    })

};
fetchAndRenderCards();

function createPagination(page, totalPage){
    const beforTwoPage = page - 2;
    const beforePage = page -1;
    const afterPage = page + 1; 
    const afterTwoPage = page + 2;
    getData.setpage(page)
    let markup = '';
    
    if (page > 1){
        markup += '<li>&laquo;</li>';
    }
    if(page > 1){
        markup += '<li>1</li>';
        if(page > 4){
            markup += '...';
        }
    }
    if(page > 3){
        markup += `<li>${beforTwoPage}</li>`
    }
    if(page > 2){
        markup += `<li>${beforePage}</li>`
    }
    markup += `<li class='active'>${page}</li>`

    if(page < totalPage - 1){
        markup += `<li>${afterPage}</li>`
    }
    if(page < totalPage - 2){
        markup += `<li>${afterTwoPage}</li>`
    }
    if(page < totalPage - 3){
        markup += `<li>...</li>`
    }
    if(page < totalPage){
        markup += `<li>${totalPage}</li>`
        markup += '<li>&raquo;</li>'
    }

    btn_container.innerHTML = markup;
    btn_container.addEventListener('click', onBtnClick);
}

function onBtnClick(event){
    if(event.target.nodeName !== "LI"){
        return;
    
    }
    const target = event.target.textContent;
    console.log(target);

    switch (target){
        case '«': 
            getData.decreasePage()
            fetchAndRenderCards()
        break;
        case '...': 
        break;
        case '»':
            getData.increasePage()
            fetchAndRenderCards()
        break;
        default:
            getData.setpage(target)
            fetchAndRenderCards()
    }
};


function createCard(data) {
    return data.map(({backdrop_path, poster_path, genre_ids, release_date, title, id}) => {
        if (backdrop_path === null){
                backdrop_path = poster_path;
                if(poster_path === null) return;
        }

        return `
            <li class="card_item" id="${id}>
                <div class="img-thumb"></div>
                <div class="wraper">
                    <img src="${img_url}${poster_path}" alt="${title}"/>
                </div>
                
                <p class="title">${title}</p>
                <p class="genre">${genre_ids.map(genre => {
                    return `<span>${genre}</span>`;
                })}</p>
                <p class="year">${release_date.slice(0, 4)}</p>
            </li>
        `;
    });
};


