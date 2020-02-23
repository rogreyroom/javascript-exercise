import './style.css';

const PIXEL_COLOR = '#e44d4d';

const fakeCanvas = document.querySelector('.fake-canvas');
const originalCanvas = document.querySelector('.original-canvas');
const orgPixelArr = originalCanvas.querySelectorAll('.pixel');
const fakePixelArr = fakeCanvas.querySelectorAll('.pixel');

orgPixelArr.forEach((orgEl, orgIdx) => {
	fakePixelArr.forEach((fakEl, fakIdx) => {
		if (orgEl.classList !== fakEl.classList && orgIdx === fakIdx) {
			fakEl.classList = orgEl.classList;
		}
	});
});

// Short cheat version
// fakeCanvas.innerHTML = originalCanvas.innerHTML
