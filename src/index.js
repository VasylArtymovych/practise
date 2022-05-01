import './css/styles.css';
import NewsApiService from './JS/NewsApiServise';
import LoadMoreArticels from './JS/load-more-artiicels';
import articlesTmpl from './templates/search-articles.hbs'

const refs = {
    searchForm: document.querySelector('#fetch-form'),
    searchBtn: document.querySelector('.js-btn-subm'),
    loadMoreBtn: document.querySelector('.js-load-more-btn'),
    articles:document.querySelector('.js-articles')
}

const newsApiServise = new NewsApiService();
const loadMoreArticels = new LoadMoreArticels({selector: '[data-action="load-more"]'})

refs.loadMoreBtn.addEventListener('click', onLoadhMoreBtn)
refs.searchForm.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();
    const search = evt.currentTarget.elements.query.value;

    if(search === '') return alert('fill the search field!');

    newsApiServise.query = search;
    clearArticlesContainer()
    newsApiServise.resetPage()
    newsApiServise.fetchArticels().then((articles)=> {
        clearArticlesContainer()
        renderArticles(articles);
    })

    evt.currentTarget.reset()
}

function onLoadhMoreBtn(){
    newsApiServise.fetchArticels().then(renderArticles)
}

function renderArticles(articles){
    refs.articles.insertAdjacentHTML('beforeend', articlesTmpl(articles));

}

function clearArticlesContainer(){
    refs.articles.innerHTML = '';
}