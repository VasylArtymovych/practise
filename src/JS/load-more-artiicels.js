export default class LoadMoreArticels{
    constructor({selector, hidden = false}){
        this.refs = this.getrefs(selector);

        hidden && this.hide();  //same as: If(hidden===true) {this.hide()}
    }

    getrefs(selector){
        const refs = {}
        refs.loadMoreBtn = document.querySelector(selector);
        refs.label = refs.loadMoreBtn.querySelector('.label');
        refs.spinner = refs.loadMoreBtn.querySelector('.spinner-border');

        return refs;
    }

    able(){
        this.refs.loadMoreBtn.disabled = false;
        this.refs.spinner.classList.add('is-hidden');
        this.refs.label.textContent = "load-more"
    }
    
    disable(){
        this.refs.loadMoreBtn.disabled = true;
        this.refs.spinner.classList.remove('is-hidden');
        this.refs.label.textContent = "loading..."
    }

    show(){
        this.refs.loadMoreBtn.classList.remove('is-hidden');
    }

    hide(){
        this.refs.loadMoreBtn.classList.add('is-hidden');
    }
}