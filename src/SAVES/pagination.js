import instanceFetchMovies from "./API";
import fetchAndRenderCards from "./renderCardsandPagination";
import refs from "./refs";

export default function createPagination(page, totalPage){
    const beforTwoPage = page - 2;
    const beforePage = page -1;
    const afterPage = page + 1; 
    const afterTwoPage = page + 2;
    // instanceFetchMovies.setpage(page)
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

    refs.pagination.innerHTML = markup;
    refs.pagination.addEventListener('click', onBtnClick);
}

function onBtnClick(event){
    if(event.target.nodeName !== "LI"){
        return;
    }
    const target = event.target.textContent;

    switch (target){
        case '«': 
        instanceFetchMovies.decrementPage()
            fetchAndRenderCards()
        break;
        case '...': 
        break;
        case '»':
            instanceFetchMovies.incrementPage()
            fetchAndRenderCards()
        break;
        default:
            instanceFetchMovies.setpage(Number(target))
            fetchAndRenderCards()
    }
};