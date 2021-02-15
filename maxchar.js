function maxChar(word) {
	let charMap = {};
	for (let char of word) {
		if (charMap.hasOwnProperty(char)) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	// console.log(charMap);
	// let maxChar,
	// 	maxCharValue = 0;
	// for (let i in charMap) {
	// 	if (charMap[i] > maxCharValue) {
	// 		maxCharValue = charMap[i];
	// 		maxChar = i;
	// 	}
	// }

	//alterbative for above

	//create an array of keys
	let keys = Object.keys(charMap);

	//create an array of values
	let values = Object.values(charMap);

	//get index of max value
	let maxIndex = values.indexOf(Math.max(...values));

	//locate the key for the correspondong value
	maxChar = keys[maxIndex];

	return maxChar;
}

console.log(maxChar("Mpissisippppppiiii"));

//for..in ---> key (objects,and everything else to get key)
//for..of ----> values (strings,arrays,maps etc)

function check(){
	console.log(a); console.log(b); let a = 10; var b = 20;}
 undefined
 check()
 VM404:2 Uncaught ReferenceError: Cannot access 'a' before initialization
	 at check (<anonymous>:2:16)
	 at <anonymous>:1:1
 check @ VM404:2
 (anonymous) @ VM427:1
 console.log(c); console.log(d); let c = 30; var d = 20;