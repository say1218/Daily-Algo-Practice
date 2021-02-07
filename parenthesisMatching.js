function balanceParenthesis(input) {
	let brackets = "[]{}()<>";
	let stack = [];

	for (let b of input) {
		let bIndex = brackets.indexOf(b);
		if (bIndex % 2 === 0) {
			stack.push(bIndex + 1);
		} else {
			let topBracketOnStack = stack.pop();
			if (topBracketOnStack !== bIndex) return false;
		}
	}

	return stack.length === 0;
}
console.log(balanceParenthesis("()[]{}<>"));
