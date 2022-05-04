import './partials/fetch-servise.html';
import './css/styles.css';
import NewsApiService from './JS/NewsApiServise';
import LoadMoreArticels from './JS/load-more-artiicels';
import articlesTmpl from './templates/search-articles.hbs'

const refs = {
    searchForm: document.querySelector('#fetch-form'),
    searchBtn: document.querySelector('.js-btn-subm'),
    articles:document.querySelector('.js-articles')
}
// NewsApiService instance to fetch on server: 
const newsApiServise = new NewsApiService();

// LoadMoreArticels instance to change the btn style:
const loadMoreArticels = new LoadMoreArticels({
    selector: '[data-action="load-more"]',
    hidden: true,
}); 

// listeners:
loadMoreArticels.refs.loadMoreBtn.addEventListener('click', loadArticles);
refs.searchForm.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();
    const search = evt.currentTarget.elements.query.value;

    if(search === '') return alert('fill the search field!');

    newsApiServise.query = search;

    clearArticlesContainer();
    loadMoreArticels.show();
    newsApiServise.resetPage();
    loadArticles();

    evt.currentTarget.reset();
};

function loadArticles(){
    loadMoreArticels.disable()
    
    newsApiServise.fetchArticels().then(articles => {
        loadMoreArticels.able()
        renderArticles(articles);
    })
};

function renderArticles(articles){
    refs.articles.insertAdjacentHTML('beforeend', articlesTmpl(articles));

};

function clearArticlesContainer(){
    refs.articles.innerHTML = '';
};

