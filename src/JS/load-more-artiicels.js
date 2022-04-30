export default class LoadMoreArticels{
    constructor({selector}){
        this.refs = this.getrefs(selector);
    }

    getrefs(selector){
        const refs = {}
        refs.loadMoreBtn = document.querySelector(selector);
        refs.label = refs.loadMoreBtn.querySelector('.label')

        return refs;
    }

    show(){}

    hide(){}
}