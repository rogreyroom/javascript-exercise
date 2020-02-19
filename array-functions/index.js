function filter(array, callback) {
	return array
		.map(callback)
		.reduce((res, cur, idx) => {
			if (cur) res.push(array[idx]);
			return res;
		}, [])
		.join();
}

function length(array) {
	return array.reduce((res, cur, idx) => {
		res = +idx;
		return res + 1;
	}, 0);
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
	filter(
		[
			1,
			2,
			3,
			4
		],
		el => el % 2 === 0
	),
	[
		2,
		4
	]
);
verify(
	filter(
		[
			1,
			2,
			3,
			4
		],
		el => el % 2 !== 0
	),
	[
		1,
		3
	]
);
verify(
	length([
		1,
		2,
		3,
		4
	]),
	4
);
verify(length([]), 0);
