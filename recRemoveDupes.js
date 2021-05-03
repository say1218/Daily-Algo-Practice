function removeDupes(str) {
	if (str.length == 0) return "";

	if (str[0] == str[1]) {
		return removeDupes(str.substr(1));
	} else {
		return str[0] + removeDupes(str.substr(1));
	}
}

console.log(removeDupes("helloohhhiii"));
