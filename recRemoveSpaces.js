function removeSpaces(str) {
	if (str.length == 0) return "";

	if (str[0] == " " || str[0] == "\t") {
		return removeSpaces(str.substr(1));
	} else {
		return str[0] + removeSpaces(str.substr(1));
	}
}

console.log(removeSpaces("Hello World dddd"));

// show length of string
function recursiveLength(testVariable) {
	if (testVariable === "") {
		return 0;
	} else {
		return 1 + recursiveLength(testVariable.substr(1));
	}
}

//sum of digits in a string
function sumOfDigits(testVariable) {
	if (testVariable.length === 0) return 0;
	else {
		return Number(testVariable[0]) + sumOfDigits(testVariable.substr(1));
	}
}
