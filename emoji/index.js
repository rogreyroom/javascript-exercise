const emojiMappings = {
	stop: '🚫',
	gwiazda: '⭐️',
	samochód: '🏎',
	buduję: '🧱',
	budzik: '⏰'
};

function useEmoji(input) {
	for (key in emojiMappings) {
		let regx = new RegExp(key, 'g');
		if (input.search(regx) > -1) return input.replace(regx, emojiMappings[key]);
	}
}

/* Weryfikacja */
function verify(input, goal) {
	if (input === goal) {
		console.log('Gratulacje!');
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
	}
}

verify(useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!'), 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!');
verify(useEmoji('Jadę po nowy samochód :D'), 'Jadę po nowy 🏎 :D');
verify(useEmoji('Właśnie buduję swoje skille w JS'), 'Właśnie 🧱 swoje skille w JS');
