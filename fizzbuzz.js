function fizzbuzz(n) {
	for (var i = 1; i <= n; i++) {
		if (i % 15 === 0) console.log("fizzbuzz");
		else if (i % 3 === 0) console.log("BUZZ");
		else if (i % 5 === 0) console.log("FIZZ");
		else console.log(i);
	}
}

fizzbuzz(17);
