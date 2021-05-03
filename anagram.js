//function isAnagram(word1, word2) {}

function createCharMap(word) {
	let charMap = {};

	for (let char of word) {
		// if (charMap.hasOwnProperty(char)) {
		if (char in charMap) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	return charMap;
}

function isAnagram(word1, word2) {
	let charMap1 = createCharMap(word1);
	let charMap2 = createCharMap(word2);

	console.log(charMap1);
	console.log(charMap2);

	if (charMap1.length === charMap2.length) {
		for (let char in charMap1) {
			if (charMap1[char] !== charMap2[char]) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}

console.log(isAnagram("silenz", "listen")); // should return true

// isAnagarm str1.split('').sort().join('') === str2.split('').sort().join('')
