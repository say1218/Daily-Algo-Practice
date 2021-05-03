function mergeString(str1, str2) {
	if (str1.length === 0) {
		return str2;
	}

	if (str2.length == 0) {
		if (str1.length == 0) {
			return "";
		}
		return str1;
	}

	if (str1[0] < str2[0]) {
		return str1[0] + mergeString(str1.substr(1), str2);
	}

	if (str2[0] < str1[0]) {
		return str2[0] + mergeString(str1, str2.substr(1));
	}
}

console.log(mergeString("acegij", "bdfh"));
