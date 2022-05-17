const axios = require('axios').default;

const URL = 'https://62831d8b38279cef71d15bf7.mockapi.io/api/v5/goods';

export function getGoods(id){
    return axios.get(URL).then(response => response.data);
};

export function createGoods(newItem){
    return axios.post(URL, newItem).then(response => response.data);
}

export function deleteGoods(id){
    return axios.delete(`${URL}/${id}` );
}

export function updateGoods(id, data){
    return axios.put(`${URL}/${id}`, data);
}