class Stack {
	constructor() {
		this.items = [];
	}

	size() {
		return this.items.length;
	}

	isEmpty() {
		return this.items.length === 0;
	}

	getTop() {
		if (this.items.lenth > 0) return this.items[0];
		else return null;
	}

	push(elem) {
		this.items.unshift(elem);
		return this.items.length;
	}

	pop() {
		if (this.items.length) {
			let popped = this.items.shift();
			return popped;
		} else {
			return "Not possible! No elements to pop";
		}
	}
}

let newStack = new Stack();
newStack.push(3);
newStack.push(5);
newStack.push(10);

console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
