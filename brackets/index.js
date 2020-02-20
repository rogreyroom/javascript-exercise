const keyMap = {
	'[': ']',
	'{': '}',
	'(': ')'
};

function checkBrackets(stringWithBrackets) {
	const strArr = stringWithBrackets.split('');
	// Check if string contains all opening and closing brackets
	const containAllClosingBracketsArr = Object.keys(keyMap)
		.reduce((res, key) => {
			strArr.filter(el => el === key).length === strArr.filter(el => el === keyMap[key]).length
				? res.push(true)
				: res.push(false);
			return res;
		}, [])
		.every(el => el === true);

	if (!containAllClosingBracketsArr) return false;
	// Find piramide top - place where opening bracket is next to closing bracket
	const piramideTopsArr = strArr.reduce((res, el, i, arr) => {
		const closingBracket = keyMap[Object.keys(keyMap).find(key => key === el)];
		const nextIdx = i + 1;

		if (arr[i] === el && arr[nextIdx] === closingBracket && nextIdx < arr.length) {
			res.push([
				i,
				nextIdx
			]);
		}
		return res;
	}, []);

	let piramidBottom = 0;
	// Find if all bracket pairs are in the right order - go from piramide top to bottom
	const piramideBracketsArr = piramideTopsArr.reduce((res, el, idx, arr) => {
		// Set piramide bottom index
		idx === 0 ? (piramidBottom = arr[idx][1]) : arr[idx - 1][1];
		// going from top (index-1) to bottom check if openning and closing brackets are in the right place
		for (let i = arr[idx][0] - 1; i < arr[idx][1] && i >= 0; i--) {
			// Exit if piramide bottom is reach
			if (idx > 0 && i === piramidBottom) {
				piramidBottom = arr[idx][1] + (arr[idx][1] - i) - 2;
				break;
			}
			const closingBracket = keyMap[Object.keys(keyMap).find(key => key === strArr[i])];
			if (strArr[arr[idx][1] + (arr[idx][1] - i) - 1] === closingBracket) res.push(true);
		}
		return res;
	}, []);

	return piramideTopsArr.length + piramideBracketsArr.length === strArr.length / 2 ? true : false;
}

/* Weryfikacja */
function verify(input, goal) {
	input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
	if (input == goal) {
		console.log('Gratulacje!');
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
	}
}

verify(checkBrackets('[{()}]'), true);
verify(checkBrackets('[{]}'), false);
verify(checkBrackets('()[{}]'), true);
verify(checkBrackets('{[(]}}'), false);
verify(checkBrackets('{[({]}})'), false);
verify(checkBrackets('{[[]}({({]})})'), false);
verify(checkBrackets('()([])[({})]({{{{[]}}}})'), true);
verify(checkBrackets('()([[[[(({{{{{[]}}}}}))]]]])[({})]({{{{[]}}}})'), true);
