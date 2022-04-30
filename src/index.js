import './css/styles.css';
import NewsApiService from './JS/NewsApiServise';
import LoadMoreArticels from './JS/load-more-artiicels';

const refs = {
    searchForm: document.querySelector('#fetch-form'),
    searchBtn: document.querySelector('.js-btn-subm'),
    loadMoreBtn: document.querySelector('.js-load-more-btn')
}

const newsApiServise = new NewsApiService();
const loadMoreArticels = new LoadMoreArticels({selector: '[data-action="load-more"]'})

refs.loadMoreBtn.addEventListener('click', onSearchMoreBtn)
refs.searchForm.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();
    const search = evt.currentTarget.elements.query.value;

    if(search === '') return alert('fill the search field!');

    newsApiServise.query = search;
    newsApiServise.resetPage()
    newsApiServise.fetchArticels()
    evt.currentTarget.reset()
}

function onSearchMoreBtn(){
    newsApiServise.fetchArticels()
}