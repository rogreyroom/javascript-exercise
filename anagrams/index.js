function getAnagrams(word, possibleAnagrams) {
	return possibleAnagrams.reduce((res, cur, idx, arr) => {
		const currentAnagramSortedLettersArray = cur.split('').sort();
		const wordSortedLettersArray = word.split('').sort();
		const hasAnagramAllWordLetters = currentAnagramSortedLettersArray.every(
			(el, i) => el === wordSortedLettersArray[i]
		);

		if (cur.length === word.length && hasAnagramAllWordLetters) res.push(cur);
		return res;
	}, []);
}

/* Weryfikacja */
function verify(input, goal) {
	input = Array.isArray(input) ? input.join(', ') : input;
	if (input == goal) {
		console.log('Gratulacje!');
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
	}
}

verify(
	getAnagrams('przeprogramowani', [
		'orperzpinawomarg',
		'swag',
		'graprzewanipromo',
		'orperzpwaniprom',
		'siema'
	]),
	'orperzpinawomarg, graprzewanipromo'
);
verify(
	getAnagrams('siema', [
		'hej',
		'witam',
		'dzień dobry',
		'emasi'
	]),
	'emasi'
);
