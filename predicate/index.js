function applyPredicate(elements, predicate) {
	const res = [];

	elements.forEach(item => {
		if (predicate(item) ? true : false) res.push(item);
	});
	return res;
}

/* Weryfikacja */
function verify(input, goal) {
	const inputAsString = JSON.stringify(input);
	const goalAsString = JSON.stringify(goal);

	if (inputAsString === goalAsString) {
		console.log('Gratulacje!');
	} else {
		console.log(`Niestety, oczekiwano - ${goalAsString}, otrzymano - ${inputAsString}`);
	}
}

verify(
	applyPredicate(
		[
			1,
			2,
			3
		],
		element => element > 2
	),
	[
		3
	]
);
verify(
	applyPredicate(
		[
			'a',
			'b',
			'c'
		],
		element =>
			[
				'b',
				'c'
			].includes(element)
	),
	[
		'b',
		'c'
	]
);
verify(
	applyPredicate(
		[
			'x',
			'y'
		],
		element => element === 'z'
	),
	[]
);
