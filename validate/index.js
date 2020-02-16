class userError extends Error {
	constructor(message) {
		super(message);
		this.name = 'Opps coś poszło nie tak!';
	}
}

function validatePassword(password) {
	if (typeof password !== 'string') {
		throw new userError('To nie string');
	}

	const mustHave = [
		password.length > 3,
		password.length <= 10,
		password.match(/!|#|@/g),
		password.match(/[0-9]/g)
	];

	return mustHave.every(el => el);
}

/* Weryfikacja */
function verify(input, goal) {
	if (input === goal) {
		console.log('Gratulacje!');
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
	}
}

verify(validatePassword(''), false);
verify(validatePassword('lol'), false);
verify(validatePassword('ToDziala1#'), true);
