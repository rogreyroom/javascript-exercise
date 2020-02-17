class userError extends Error {
	constructor(message) {
		super(message);
		this.name = 'Opps coś poszło nie tak!';
	}
}

function withPrefix(prefix) {
	return function(name) {
		if (typeof name !== 'string') {
			throw new userError('To nie string');
		}
		return `${prefix}${name}`;
	};
}

/* Weryfikacja */
function verify(input, goal) {
	if (input === goal) {
		console.log('Gratulacje!');
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
	}
}

const course = withPrefix('I ty Opanujesz JavaScript, ');
try {
	verify(course('Marta'), 'I ty Opanujesz JavaScript, Marta');
	verify(course('Janek'), 'I ty Opanujesz JavaScript, Janek');
} catch (err) {
	console.log(`Niestety :( - ${err}`);
}
