const player = document.querySelector('.player');
const toggle = player.querySelector('.toggle');
const video = player.querySelector('.viewer');
const skipBtn = player.querySelectorAll('[data-skip]');
const range = player.querySelectorAll('.player__slider');
const progressBar = player.querySelector('.progress__filled');


toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateBtn)
video.addEventListener('pause', updateBtn)
video.addEventListener('timeupdate', hundleProgress)

function togglePlay () {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateBtn() {
	const icon = video.paused ? '▶️' : '❚ ❚';
	toggle.textContent = icon;
}

skipBtn.forEach((btn) => {
	btn.addEventListener('click', skip);
})

function skip(event) {
	console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip);
};

range.forEach((input) => {
	input.addEventListener('input', hundleChangeUpdate);
});

function hundleChangeUpdate(event) {
	video[this.name] = this.value;
};

function hundleProgress(params) {
	const parcent = video.currentTime / video.duration * 100;
	progressBar.style.flexBasis = `${parcent}%`
}

