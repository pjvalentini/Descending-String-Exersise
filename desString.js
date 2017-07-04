// Descending String Exercise

// let counter stores a function with a number passed in.
// let asteriskArr stores an empty array that can be looped over.
// the array will hold asterisks that will be iterated over.
let counter = function(num) {
	let asteriskArr = [];
	for (var i = 0; i < num; i++) {
		asteriskArr.push("*");
	}

// let int stores a function that sets the interval over the loop.
// console.log and join the asterisks, seperating them with a space.
// add a condition that if the length of the array is not equal to 1 then
// take way 1 asterisk per line throughout the loop, until 1 asterisk is left.
//
	let int = setInterval(() => {
		console.log(asteriskArr.join("  "));
		if (asteriskArr.length !== 1) {
			  asteriskArr.pop();
		} else {
			clearInterval(int);
		}
	}, 1000);
};
counter(10);
