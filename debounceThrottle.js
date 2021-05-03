//https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf

const debounce = function (fn, delay) {
	let timerId;
	return function () {
		let context = this;
		let args = arguments;
		clearTimeout(timerId);
		timerId = setTimeout(() => fn.apply(context, args), delay);
	};
};

const throttle = function (fn, delay) {
	let isThrottle;
	return function () {
		let context = this;
		let args = arguments;
		if (!isThrottle) {
			fn.apply(context, args);
			isThrottle = true;
			setTimeout(() => (isThrottle = false), delay);
		}
	};
};

// const throttle = (func, limit) => {
// 	let inThrottle;
// 	return function () {
// 		const args = arguments;
// 		const context = this;
// 		if (!inThrottle) {
// 			func.apply(context, args);
// 			inThrottle = true;
// 			setTimeout(() => (inThrottle = false), limit);
// 		}
// 	};
// };

let debounceBtn = document.querySelector("#debounceBtn");
debounceBtn.addEventListener(
	"click",
	debounce(function () {
		console.info("Hey! It is", new Date().toUTCString());
	}, 3000)
);
