const api_key = "9c009c00402fb866baf05bd346a2d01d";
const img_url = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = "https://api.themoviedb.org/3/";
const trending = "https://api.themoviedb.org/3/trending/movie/day";
const movie_genres = `https://api.themoviedb.org/3/discover/movie`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;


// class FetchData {
    
//     constructor(){
//         this.page = 1;
//     }

//     async moviesFetch(){
//         const response = await fetch(trending + new URLSearchParams({
//             api_key: api_key,
//             page: this.page,
//         }))
//         return response.json();
//     }

//     setpage(newPage){
//         this.page = newPage;
//     }

// }

// const api = new FetchData();

// const response =  api.moviesFetch();
// response.then(data => {
//     console.log(data);

//     createCardList(data.results)
    
// })

// const createCardList = (cards) => {
//     console.log(cards);
//     const list = cards.map(createCard).join('');
//     card_list.insertAdjacentHTML('beforeend', list);
    
// }

const createCard = (data) => {
    // {backdrop_path, poster_path, genre_ids, release_date, title, id}
    // if (backdrop_path === null){
    //     backdrop_path = poster_path;
    //     if(poster_path === null) return;
    // }
    return data.map(({backdrop_path, poster_path, genre_ids, release_date, title, id}) =>{
    
    return `
    <li class="card_item" id="${id}>
        <div class="img_thumb">
            <img src="${img_url}${backdrop_path}" alt="${title}"/>
        </div>
        <p class="title">${title}</p>
        <p class="genre">${genre_ids.map(genre => {
            return `<span>${genre}</span>`;
        })}</p>
        <p class="year">${release_date.slice(0, 4)}</p>
    </li>
    `
})
}

// const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'];
// const per_page = 5;
// const page = 1; 

// function createBtnLIst(buttons,  per_page, page){
//    let start = per_page * (page -1);
//     let end =  start + per_page;
//     const render_btns = buttons.slice(start, end);
//     for (let i = 1; i < render_btns.length+1; i += 1){
//         const btn = `<button type="button" data-action="${i}">${i}</button>`
//         btn_container.insertAdjacentHTML('beforeend', btn);
//     }
// }

// createBtnLIst(buttons, per_page, page);

// btn_container.addEventListener('click', onBtnClick)

// function onBtnClick(event){
//     if (event.target === event.currentTarger) return;
//     const page = event.target.dataset.action;
//     api.setpage(page);
//     api.moviesFetch().then(data => {
//         card_list.innerHTML = '';
//         createCardList(data.results);
//     })
// }

const card_list = document.querySelector('.card_list');
const btn_container = document.querySelector('.btn_container');

let globalPage;

function searchTrend(page=1){
    card_list.innerHTML = '';

    fetch(trending + "?api_key=" + api_key + "&page=" + page).then(response => response.json()).then(data => {
        console.log(data);
        const markup =  createCard(data.results);
        
        card_list.insertAdjacentHTML('beforeend', markup);
        createPagination(data.page, data.total_pages);

    })
}
searchTrend();

function createPagination(page, totalPage){
    let markup = '';
    const beforTwoPage = page - 2;
    const beforePage = page -1;
    const afterPage = page + 1; 
    const afterTwoPage = page + 2;
    globalPage = page;
    
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
    switch (target){
        case '«': 
            searchTrend(globalPage - 1);
        break;
        case '...': 
        break;
        case '»': 
        searchTrend(globalPage + 1);
        break;
        default: 
        searchTrend(target);
    }
    console.dir(event.target.textContent);
}