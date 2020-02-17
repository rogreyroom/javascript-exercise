class userError extends Error {
	constructor(message) {
		super(message);
		this.name = 'Opps coś poszło nie tak!';
	}
}

function zipIt(first, second) {
	const firstArr = [
		...String(first)
	];
	const secondArr = [
		...String(second)
	];
	let resStr = '';

	if (typeof first !== 'number' || typeof second !== 'number') {
		throw new userError('Jeden z parametrów posiada nieprawidłowy typ danych! Upewnij że wpisujesz liczby');
	}

	for (i = 0; i < firstArr.length || i < secondArr.length; i++) {
		if (i < firstArr.length) {
			resStr = resStr.concat(firstArr[i]);
		}
		if (i < secondArr.length) {
			resStr = resStr.concat(secondArr[i]);
		}
	}

	first = resStr.slice(0, firstArr.length);
	second = resStr.slice(firstArr.length, resStr.length);
	return `${first}${second}`;
}

/* Weryfikacja */

function verify(input, goal) {
	if (input === goal) {
		console.log('Gratulacje!');
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
	}
}

verify(zipIt(111, 222), '121212');
verify(zipIt(123, 456), '142536');
verify(zipIt(12, 5555), '152555');
