import ApiServise from './api';
import renderTrendsOnMain from './renderTrendsOnMain';
import {refs} from './refs';

const fetchData = new ApiServise();

function fetchAndRenderCards(){
    refs.filmsContainer.innerHTML = '';

    const data = fetchData.getTrendingFilm();

    data.then(({results, page, total_pages}) => {

        renderTrendsOnMain(results)
        createPagination(page, total_pages);
    })
}

export default function createPagination(page, totalPages){
    const beforeTwoPage = page - 2;
    const beforePage = page - 1;
    const afterPage = page + 1;
    const afterTwoPage = page + 2;
    let markup = '';

    if(page > 1){
        markup += '<li>&laquo;</li>';
    }
    if(page > 1){
        markup += '<li>1</li>';
        if(page > 4){
            markup += '<li>...</li>';
        } 
    }
    if(page > 3){
        markup += `<li>${beforeTwoPage}</li>`;
    }
    if(page > 2){
        markup += `<li>${beforePage}</li>`;
    }

    markup += `<li class="isActive">${page}</li>`;

    if(page < totalPages - 1){
        markup += `<li>${afterPage}</li>`;
    }
    if(page < totalPages - 2){
        markup += `<li>${afterTwoPage}</li>`;
    }
    if(page < totalPages - 3){
        markup += '<li>...</li>';
    }    
    if(page < totalPages){
        markup += `<li>${totalPages}</li>`;
        markup += '<li>&raquo;</li>';
    }
    
    refs.pagination.innerHTML = markup;
    refs.pagination.addEventListener('click', onBtnClick);
};

function onBtnClick(event){
    if(event.target.nodeName !== "LI")return;
    const target = event.target.textContent;
    
    switch (target){
        case '»': 
            fetchData.incrementPage();
            fetchAndRenderCards();
        break;
        case '«': 
            fetchData.decrementPage();
            fetchAndRenderCards();
        break;
        case '...':
        break;
        default: 
            fetchData.setPage(Number(target));
            fetchAndRenderCards();
    }
};