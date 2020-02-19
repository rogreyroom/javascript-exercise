const keyMap = {
	a: '4',
	e: '3',
	i: '1',
	o: '0',
	s: '5',
	z: '2'
};

function greeting(message) {
	const messageArr = message.split('');

	const result = messageArr.map((char, idx) => {
		if (Object.keys(keyMap).includes(char.toLowerCase()) && idx !== 0) {
			// Map the char to number
			char = keyMap[char.toLowerCase()];
		} else {
			// Change the case the char for even and odd characters
			idx % 2 === 0 ? (char = char.toUpperCase()) : (char = char.toLowerCase());
		}
		return char;
	});
	return result.join('');
}

/* Weryfikacja */
function verify(input, goal) {
	if (input === goal) {
		console.log('Gratulacje!');
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
	}
}

verify(greeting('hacker'), 'H4Ck3r');
verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
verify(greeting('Saving The World'), 'S4V1Ng tH3 w0rLd');
