const alphabet = [
	'a',
	'ą',
	'b',
	'c',
	'd',
	'e',
	'ę',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'ł',
	'm',
	'n',
	'ń',
	'o',
	'ó',
	'p',
	'r',
	's',
	'ś',
	't',
	'u',
	'w',
	'y',
	'z',
	'ź',
	'ż'
];

function duplicates(arr) {
	return arr.filter((itm, index) => arr.indexOf(itm) !== index);
}

function isPangram(sentence) {
	const sentenceArr = [
		...sentence.toLowerCase().replace(/\s|,|\!|\?/gi, '')
	];
	const duplicatedLetters = [
		...new Set(duplicates(sentenceArr))
	];
	const res = [];

	alphabet.forEach(letter => {
		res.push(sentenceArr.includes(letter));
	});
	if (duplicatedLetters.length > 0) {
		console.log(`Zdanie "${sentence}" zawiera duplikaty liter ${duplicatedLetters.toString()}`);
	}
	return res.some(val => val === false) ? false : true;
}

/* Weryfikacja */
function verify(input, goal) {
	if (input === goal) {
		console.log('Gratulacje!');
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
	}
}

verify(isPangram('test'), false);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!'), true);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małże!'), false);
