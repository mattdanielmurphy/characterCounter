function countLetters(str) {
	// skip spaces
	str = str.split(' ').join('').toString();

	for (letter in str) {
		console.log(str[letter]);
	}
}

countLetters('te st');