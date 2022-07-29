import instanceFetchMovies from './API';
import createCards from './createCards';
import refs from './refs';
// import createPagination from './pagination';



const options = {
    root: null,
    rootMargin: '100px',
    threshold: 0
}
const callback = function(entries, observer) {
    entries.forEach(entry => {
    
        if(entry.isIntersecting){
            
            fetchAndrenderCardsOnMobileScreen();
        }
    });
};

const  observer = new IntersectionObserver(callback, options);

const target = document.querySelector('.js-scroll-element');
observer.observe(target);


function fetchAndrenderCardsOnMobileScreen(){
    
    instanceFetchMovies.moviesFetch().then(({results, page, total_pages}) => {
        const markup = createCard(results).join('');
        refs.cardList.insertAdjacentHTML('beforeend', markup);
        instanceFetchMovies.incrementPage();
        
    })
}