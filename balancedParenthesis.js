// function balancedParenthesis(array, currentIndex) {
// 	if (currentIndex < 0) {
// 		return;
// 	}
// 	if (array[currentIndex] === "(" && array[currentIndex + 1] == ")") {
// 		return balancedParenthesis(array.splice(currentIndex, 2), 0);
// 	} else {
// 		return balancedParenthesis(array, currentIndex + 1);
// 	}
// }

//normal if-else
function balancedParenthesis(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] == "(" && array[i + 1] == ")") {
			array.splice(i, 2);
			i -= 2;
			continue;
		}
	}

	if (array.length) return false;
	else return true;
}

function balancedParenthesis(array) {
	let newstack = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] == "(") newstack.push(array[i]);
		else newstack.pop(array[i]);
	}
	return newstack;
}

function balancedParenthesisMixed(array) {
	let brackets = "[]{}()<>";
	let stack = [];

	for (let input of array) {
		let bracketIndex = brackets.indexOf(input);

		if (bracketsIndex === -1) {
			continue;
		}

		if (bracketIndex % 2 == 0) {
			stack.push(bracketIndex + 1);
		} else {
			if (stack.pop() !== bracketIndex) return false;
		}
	}
	return stack.length === 0;
}

//SOLVE EAST WEST QUESTION WITH BALANCING PARENTHESIS
