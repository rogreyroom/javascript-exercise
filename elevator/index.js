import './style.css';

const directions = {
	top: '🔼',
	bottom: '🔽'
};

const direction = document.querySelector('.direction');
const elevator = document.querySelector('.elevator');

elevator.addEventListener('wheel', elevatorMove);

function elevatorMove(e) {
	direction.textContent = `Kierunek: ${e.deltaY < 0 ? directions.top : directions.bottom} ${e.target.innerHTML}`;
}
