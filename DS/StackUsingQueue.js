class Queue {
	constructor() {
		this.items = [];
		this.first = 0;
		this.last = 0;
	}

	enqueue(val) {
		this.items[this.last] = val;
		this.last++;
		return this.last;
	}

	dequeue() {
		let first = this.items[this.first];
		delete this.items[this.first];
		this.first++;
		return first;
	}

	isEmpty() {
		return this.first === this.last;
	}

	size() {
		return this.last - this.first;
	}

	peek() {
		return this.items[this.first];
	}
}

var MyStack = function () {
	this.queue = new Queue();
};

MyStack.prototype.push = function (x) {
	let rotations = this.queue.size();
	this.queue.enqueue(x);
	while (rotations > 0) {
		this.queue.enqueue(this.queue.dequque());
		rotations--;
	}
};

MyStack.prototype.pop = function (x) {
	return this.queue.dequeue();
};

MyStack.prototype.top = function (x) {
	return this.queue.peek();
};
