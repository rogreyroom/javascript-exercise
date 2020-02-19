function checkISBN(isbn) {
	const isbnArr = isbn.split('').reduce((res, cur) => {
		if (cur !== '-') res.push(cur);
		return res;
	}, []);
	let isbnLength = isbnArr.length;

	return isbnArr.reduce((res, cur, idx) => {
		res += parseInt(cur) * isbnLength--;
		return res;
	}, 0) %
		11 ===
	0
		? true
		: false;
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

verify(checkISBN('85-359-0277-5'), true);
verify(checkISBN('8535902775'), true);
verify(checkISBN('99921-58-10-3'), false);
verify(checkISBN('9992158103'), false);
