import './sass/main.scss';
// import templateFunction from './template.hbs';
// import colorcardtemp from './templates/cards.hbs'
import template from './templates/cards' 
import API from './api-server';

const formRef = document.querySelector('.js-form');
formRef.addEventListener('submit', onSubmit)

function onSubmit(evt){
    evt.preventDefault();
    const form =  evt.currentTarget;
    const input = form.elements.text.value;
    API.fetchPokemon(input)
        .then(makeMurkup)
        .catch(err => console.log('eff', err))
        .finally(() => form.reset())

}

// function makeMurkup(response){
//     const murk = template(response);
//     document.body.insertAdjacentHTML('beforeend', murk);
// }

// const res = fetch(`https://pokeapi.co/api/v2/pokemon`)
// .then(response => {
//     return response.json()})
// .then(({results}) => {
//     console.log(results);
//     const arr = results.map(({url}) => fetch(url).then((response) => response.json()));
//     return arr;
// })
// .then(arr => {
//     console.log(arr);

// })

// fetch()