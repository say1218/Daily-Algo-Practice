class Queue {
	constructor() {
		this.items = [];
	}

	size() {
		return this.items.length;
	}

	isEmpty() {
		return this.items.length === 0;
	}

	getFront() {
		if (this.items.lenth > 0) return this.items[0];
		else return null;
	}

	enqueue(elem) {
		this.items.push(elem);
		return this.items.length;
	}

	dequeue() {
		if (this.items.length) {
			let popped = this.items.shift();
			return popped;
		} else {
			return "Not possible! No elements to pop";
		}
	}
}

let newQueue = new Queue();
newQueue.enqueue(3);
newQueue.enqueue(5);
newQueue.enqueue(10);

console.log(newQueue.dequeue());
console.log(newStack.dequeue());
console.log(newStack.dequeue());
console.log(newStack.dequeue());
