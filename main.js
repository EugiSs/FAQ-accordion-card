const spoiler = document.querySelector('.spoilers');

spoiler.addEventListener('click', showSpoiler);

function showSpoiler (e) {
	let title = e.target.closest('.spoiler__title');

	if (!title) return;

	if (title.classList.contains('active')) hideAllSpoilers();
	else {
		hideAllSpoilers();
		title.classList.add('active');
		showTextSpoiler(e.target.closest('.spoiler').querySelector('.spoiler__text'));
	};
};

function hideAllSpoilers () {
	Array.from(spoiler.querySelectorAll('.spoiler__title')).forEach(el => {
		el.classList.remove('active');
	});
	Array.from(spoiler.querySelectorAll('.spoiler__text')).forEach(el => {
		el.style.height = '0px';
	});
};

function showTextSpoiler (elem) {
	elem.style.height = elem.scrollHeight + 'px';
}