const player = document.querySelector('.player');
const toggle = player.querySelector('.toggle');
const video = player.querySelector('.viewer');
const skipBtn = player.querySelectorAll('[data-skip]');
const range = player.querySelectorAll('.player__slider');
const progressBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');

let mouseDown = false;

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('timeupdate', hundleProgress);
progress.addEventListener('click', rewind);
progress.addEventListener('mousedown', ()=>(mouseDown = true));
progress.addEventListener('mouseup', ()=>(mouseDown = false));
progress.addEventListener('mousemove', () => { mouseDown && rewind(event) });

function togglePlay () {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
};

function updateBtn() {
	const icon = video.paused ? '▶️' : '❚ ❚';
	toggle.textContent = icon;
};
// add eventListener on btn's btn to skip video 10s / 25s
skipBtn.forEach((btn) => {
	btn.addEventListener('click', skip);
});

function skip(event) {
	video.currentTime += parseFloat(event.currentTarget.dataset.skip);
};
//add eventListener on two range's to change (volume / speed)
range.forEach((input) => {
	input.addEventListener('input', hundleChangeUpdate);
});

function hundleChangeUpdate(event) {
	const name = event.currentTarget.name;
	const value = event.currentTarget.value;
	video[name] = value;
	// video[this.name] = this.value;
};
// display progress (yelow line on duration);
function hundleProgress() {
	const percent = video.currentTime / video.duration * 100;
	progressBar.style.flexBasis = `${percent}%`
};

function rewind(event) {
	const rewindTime = (event.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = rewindTime;
};