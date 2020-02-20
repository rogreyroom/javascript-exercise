function convertAstToHtmlString(astObject) {
	const { nodeType, tagName, attributes, children } = astObject;

	if (nodeType === 'element') {
		const tagAtributes = attributes
			.map(attribute => {
				const { name, value } = attribute;
				return `${name}="${value}"`;
			})
			.toString()
			.replace(/,/g, ' ');
		const tagChildren = children
			.map(child => {
				const { nodeType, value } = child;
				if (nodeType === 'text') {
					return `${value}`;
				}
			})
			.toString()
			.replace(/,/g, ' ');

		return `<${tagName} ${tagAtributes}>${tagChildren}</${tagName}>`;
	}
}

/* Weryfikacja */
function verify(input, goal) {
	input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
	if (input === goal) {
		console.log('Gratulacje!');
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
	}
}

verify(
	convertAstToHtmlString({
		nodeType: 'element',
		tagName: 'div',
		attributes: [
			{ name: 'class', value: 'test' }
		],
		children: [
			{ nodeType: 'text', value: 'Hello world!' }
		]
	}),
	'<div class="test">Hello world!</div>'
);
