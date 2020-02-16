class userError extends Error {
	constructor(message) {
		super(message);
		this.name = 'Opps coś poszło nie tak!';
	}
}

function reverseMe(input) {
	if (typeof input !== 'string') {
		throw new userError('To nie string');
	}
	return input.split('').reverse().toString().replace(/,/g, '');
}

/* Weryfikacja */
function verify(input, goal) {
	if (input === goal) {
		console.log('Gratulacje!');
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
	}
}

verify(reverseMe('a'), 'a');
verify(reverseMe('abc'), 'cba');
verify(reverseMe('Przeprogramowani'), 'inawomargorpezrP');
verify(reverseMe('Brawo!'), '!owarB');
verify(reverseMe(1112), '2111');
