class MyPromise {
	constructor(executor) {
		console.log("her in cons");
		this._resolutionQueue = [];
		executor(this._resolve.bind(this));
	}
	//private method
	_resolve(value) {
		while (this._resolutionQueue.length > 0) {
			var handler = this._resolutionQueue.shift();
			handler(value);
		}
	}

	then(resolutionHandler) {
		console.log("in then");
		this._resolutionQueue.push(resolutionHandler);
	}
}

var promise = new MyPromise(function (resolve) {
	setTimeout(function () {
		resolve("hello");
	}, 100);
});

promise.then(function (res) {
	console.log(res);
});
