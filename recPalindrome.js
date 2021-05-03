function isPalindrome(testVariable) {
	if (testVariable.length === 0) {
		return false;
	}

	if (testVariable[0] === testVariable[testVariable.length - 1]) {
		return isPalindrome(testVariable.substr(1, testVariable.length - 1));
	}

	return false;
}
