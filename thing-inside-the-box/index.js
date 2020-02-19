function thing(box) {
	const boxMatrix = box.trim().split('\n').map(x => x.trim().split(''));
	const result = [];

	boxMatrix.forEach(row => {
		const isBoxFrame = row.every(x => x.trim() !== '');

		if (!isBoxFrame) {
			// Check if an element is outside the box
			if (row[0].trim() !== row[row.length - 1].trim()) return result.push(false);
			// Check if an element is inside the box or the box is empty
			const insideBoxChk = row
				.reduce((res, cur, i) => {
					if (i > 0 && i < row.length - 1) {
						cur.trim() !== '' ? res.push(true) : res.push(false);
					}
					return res;
				}, [])
				.some(el => el === true);
			result.push(insideBoxChk);
		}
	});

	return result.some(el => el === true);
}

/* Weryfikacja */
function verify(input, goal) {
	if (input === goal) {
		console.log('Gratulacje!');
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
	}
}

verify(
	thing(` *****
            *   * o
            *   *
            *****`),
	false
);

verify(
	thing(` *****
            * o *
            *   *
            *****`),
	true
);

verify(
	thing(` *****
            *   *
            *   *
            *****`),
	false
);

verify(
	thing(` |||||
            |   |
            |   |
            |||||`),
	false
);
