import './style.css';

const input = document.querySelector('.text-input');
const mirror = document.querySelector('.mirror');

input.addEventListener('input', mirrorMe);

function mirrorMe() {
	mirror.textContent = input.value.split('').reverse().toString().replace(/,/g, '');
}
