export default class NewsApiService{
    constructor(){
        this.searchQuery = ''
        this.page = 1;
    }

    fetchArticels(){
        const options = {
            headers : {
                'X-Api-Key': "8868dd2683f64984b0e4e94bab24faa3"
            }
        }
        const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language='en'&pageSize='5'$page=${this.page}`;

        fetch(url, options)
        .then(response => response.json())
        .then((data) => {
            this.incrementPage();
        })
    }

    get query(){
        return this.searchQuery;
    }

    set query(newQuery){
        this.searchQuery = newQuery;
    }

    incrementPage(){
        this.page += 1;
    }

    resetPage(){
        this.page = 1;
    }

}