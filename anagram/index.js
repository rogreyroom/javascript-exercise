function getAnagrams(word, possibleAnagrams) {
	return possibleAnagrams.reduce((res, cur, idx, arr) => {
		if (cur.length === word.length && cur.split('').sort().every((el, i) => el === word.split('').sort()[i]))
			res.push(cur);
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
