class Stack {
	constructor() {
		this.items = [];
		this.size = 0;
	}

	size() {
		return this.items.length;
	}

	push(val) {
		this.items[this.size] = val;
		this.size++;
	}

	pop() {
		if (this.items.length > 0) {
			let popped = this.items[this.size - 1];
			delete this.items[this.size - 1];
			this.size--;
			return popped;
		} else {
			return "Not possible! No elements to pop";
		}
	}

	getTop() {
		if (this.items.lenth > 0) return this.items[this.size - 1];
		else return null;
	}
}

var MyQueue = function () {
	this.stack = new Stack();
};

MyQueue.prototype.enqueue = function (x) {};

MyQueue.prototype.dequeue = function (x) {
	this.stack.pop();
};

MyQueue.prototype.peek = function (x) {};
