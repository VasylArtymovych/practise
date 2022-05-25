import {getItems, postItem, deleteItem, updateItem} from './fetchAPI'

const refs = {
    form: document.querySelector('.form'),
    loader: document.getElementById('loader'),
    ul: document.querySelector('.list'),
    fetchBtn: document.querySelector('.fetchBtn')
};

let items = [];

refs.fetchBtn.addEventListener('click', onFetchBtn);

function onFetchBtn(){
    showLoader()
    getItems().then(data => {
        items = data;
        renderItems();
    })
    .catch(err => console.log)
    .finally(()=>{
        hideLoader();
        refs.fetchBtn.disabled=true;
    })
};

refs.form.addEventListener('submit', submitHandler);

function submitHandler(evt){
    evt.preventDefault();

    let text = evt.currentTarget.elements.text.value;

    const newItem = {
        text,
        isDone: false,
    };
    createItem(newItem)
    .then(()=>{
        refs.form.reset();
    });
}

refs.ul.addEventListener('click', onItemClick);

function onItemClick(evt){
    if (evt.target === evt.currentTarget) return 
    const parent = evt.target.closest('li');
    const {id} = parent.dataset;

    switch (evt.target.nodeName){
        case 'BUTTON':
            removeItem(id);
            break;
        case 'INPUT':
            toggleItem(id);
            break;
        default:
            break;
    };
};

// create new item:
function createItem(newItem){
    showLoader();
    return postItem(newItem)
    .then(data => {items.push(data)})
    .then(()=>{
        renderItems();    
    })
    .catch(error => {
        console.log(error.message);
    })
    .finally(hideLoader);
};

// change checkbox:
function toggleItem(id){
    showLoader();
    const item = items.find(item => item.id === id);
    console.log(item);

    updateItem(id, {isDone: !item.isDone})
    .then(()=>{
        items = items.map(item => item.id === id ? {...item, isDone: !item.isDone} : item);
    })
    .then(()=> {
        renderItems();
    })
    .finally(()=>{
        hideLoader()
    })

};

// delete item from list:
function removeItem(id){
    showLoader();
    deleteItem(id)
    .then(()=> {
        items = items.filter(item => item.id !== id);
        renderItems();
    })
    .finally(()=>{
        hideLoader();
    })
    .catch(err => {console.log(err.message)});
}

function renderItems(){
    const list = items.map(template).join('');
    refs.ul.innerHTML='';
    refs.ul.insertAdjacentHTML('beforeend', list);
};

function template({id, text, isDone}){
    return `<li data-id="${id}">
                <label>
                    <input type="checkbox" ${isDone ? 'checked' : ''} />
                    <apan>${text}</span>
                </label>
                <button>x</button>
            </li>`;
};

function showLoader(){
    refs.loader.classList.add('show');
};
function hideLoader(){
    refs.loader.classList.remove('show');
};