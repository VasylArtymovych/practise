const api_key = "9c009c00402fb866baf05bd346a2d01d";
const img_url = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = "https://api.themoviedb.org/3/";
const trending = "https://api.themoviedb.org/3/trending/movie/day?";

const current_page = 1;
const arrOfBtn = [];

// console.log(arrOfBtn);



const movies_list = document.querySelector(".movies_list");
const btn_list = document.querySelector('.btn_list');


async function fetchData(){
    
    const response = await fetch(trending + new URLSearchParams({
        api_key: api_key,
        page: current_page
    }));
    console.log(response);
    
    return response.json();
}
const res = fetchData('popular');

res.then(data => {
    console.log(data);
    
    template(data.results);
    // createBtns(data.total_pages);
    displayBtn(data.total_pages, btn_list, 10, current_page);
});

// function createBtns(total, ){
//     for (let i = 1; i <= total; i += 1){
//     arrOfBtn.push(i)
//     }
// }

function displayBtn(total, wraper, per_page, page){
    wraper.innerHTML = '';

    const start = page;
    const end = start + per_page;

    for (let i = start; i < end; i += 1){
        const btn = document.createElement('button');
        btn.type = "button";
        btn.textContent = i;
        wraper.append(btn);

    }
    console.log('hello');
}




function template(arr){

    const temp = arr.map(({poster_path, title}) => `<div>
    <img src="${img_url}${poster_path}" alt="${title}" width="300">
    <p>${title}</p>
    <p>${"hello"}</p>
    </div>`).join('');
    movies_list.insertAdjacentHTML('beforeend', temp);
    
}

