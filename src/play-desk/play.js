
const listRef = document.querySelector('.key__list');
const listItemsRef = document.querySelectorAll('.key__item');

listItemsRef.forEach((item) => item.addEventListener('click', onItemClick));

function onItemClick(event){
  const item = event.currentTarget;
  const code = event.currentTarget.dataset.key;
  
  playSound(code, item);
};

listItemsRef.forEach(item => item.addEventListener('transitionend', removeTransition));

function removeTransition(evt){
  if(evt.propertyName !== 'transform') return;
  evt.currentTarget.classList.remove('playing');
};

window.addEventListener('keydown', onBtnPress);

function onBtnPress(evt){
  const code = evt.keyCode;
  const item = document.querySelector(`.key__item[data-key="${code}"]`);
  playSound(code, item);
}

function playSound(code, item){
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  if(!audio) return;
  audio.play();
  audio.currentTime = 0;
  item.classList.add('playing');
};