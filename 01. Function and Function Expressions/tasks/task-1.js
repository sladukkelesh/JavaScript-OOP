/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum(numbers) {
	var sum;

	if (numbers.length === 0) {
		return null;
	}

	sum = numbers.reduce(function(sum, x) {
		x = +x;

		if (isNaN(x)) {
			throw new Error();
		}

		return sum + x;
	}, 0);

	return sum;
}

module.exports = sum;