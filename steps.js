function steps(n) {
	for (var i = 1; i <= n; i++) {
		let string = "";
		for (var j = 1; j <= i; j++) {
			string += "#";
		}
		string += "\n";
		console.log(string);
	}
}
steps(3);
