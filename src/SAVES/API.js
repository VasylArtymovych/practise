const axios = require('axios').default;

const api_key = "9c009c00402fb866baf05bd346a2d01d";
const img_url = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = "https://api.themoviedb.org/3/";
const trending = "https://api.themoviedb.org/3/trending/movie/week?";
const discover = `https://api.themoviedb.org/3/discover/movie`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;
const movie_by_id =`https://api.themoviedb.org/3/movie/` /// {movie_id}?api_key=${api_key}&language=en-US

class FetchMovies {
    constructor(){
        this.page = 1;
    }

    async moviesFetch(){
        const response = await axios(trending + new URLSearchParams({
            api_key: api_key,
            page: this.page,
        }))
        return response.data;
    }

    async fetchMovieById(id){
        const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=9c009c00402fb866baf05bd346a2d01d&language=en-US`)
        return response.data;
    }

    setpage(newPage){
        this.page = newPage;
    }
    incrementPage(){
        this.page += 1;
    }
    decrementPage(){
        this.page -= 1;
    }
};

const instanceFetchMovies = new FetchMovies();
export default instanceFetchMovies;
