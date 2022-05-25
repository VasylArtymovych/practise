const axios = require('axios').default;

const URL = 'https://62831d8b38279cef71d15bf7.mockapi.io/api/v5/goods';

export function getItems(){
    return axios.get(URL).then(response => response.data);
};

export function postItem(newItem){
    return axios.post(URL, newItem).then(response => response.data);
}

export function deleteItem(id){
    return axios.delete(`${URL}/${id}` );
}

export function updateItem(id, data){
    return axios.put(`${URL}/${id}`, data);
}


// <<<<<<<<<<<<<<   request on own-server!  >>>>>>>>>>>>>>>>>>>>>>
// const URL = 'http://localhost:3000/goods';


// export function getItems(){
//     return axios.get(URL).then(response => response.data);
// };

// export function postItem(newItem){
//     return axios.post(URL, newItem).then(response => response.data);
// }

// export function deleteItem(id){
//     return axios.delete(`${URL}/${id}` );
// }

// export function updateItem(id, data){
//     return axios.patch(`${URL}/${id}`, data);
// }