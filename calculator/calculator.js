function add (a,b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}

function sum (arr) {
	let total = 0;
	arr.forEach(element => {
		total += element
	});
	return total;
}

function multiply (arr) {
	let mult = arr[0];

	for(let i=1; i<arr.length;i++){
		mult *= arr[i];
	}

	return mult;
}

function power(base, power) {
	let result = 1;
	for(let i=0; i<power; i++){
		result *= base;
	}
	return result;
}

function factorial(num) {
	if(num==0){
		return 1;
	}
	else{
		for(let a=num-1; a>0; a--){
			num*=a;
		}
		return num;
	}
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}