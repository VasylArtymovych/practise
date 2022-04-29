const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemon(id){
    return  fetch(`${BASE_URL}/pokemon/${id}`)
    .then(response => response.json())
}
console.log(fetchPokemon(5));
export default {fetchPokemon};