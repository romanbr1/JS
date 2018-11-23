//task1
let user = {};
user.name = "Pulup";
user.surname = "Shevchenko";
user.name = "Sergiy";
console.log(user);
delete (user.name);
console.log(user);

// task2
console.log("-----------------");
employeeSalaries = {};
employeeSalaries.e1 = 1000;
employeeSalaries.e2 = 2000;
employeeSalaries.e3 = 3000;
employeeSalaries.e4 = 4000;
employeeSalaries.e5 = 5000;

console.log(employeeSalaries);
let summ = 0;
for ( let salary in employeeSalaries) {
	summ += employeeSalaries[salary];
}
console.log(summ);

// task3
console.log("-----------------");
function calc(a, operator, b) {
	let x;
	console.log(a+operator+b+"=");
	try {
		switch (operator) {
	case ("+"): {
		x = a + b;
		break;
	}
	case ("-"): {
		x = a - b;
		break;
	}
	case ("*"): {
		x = a * b;
		break;
	}
	case ("/"): {
		x = a / b;
		break;
	}
	}
	
	
		if (typeof (x) === 'undefined') throw "wrong operator";
		if(isNaN(a)) throw "a is not a number";
		if(isNaN(b)) throw "b is not a number";
	} catch (err) {
		console.log(err);
		return 0;
	}
	return x;
}

console.log(calc(5, "+", 8));
console.log(calc(5, "-", 8));
console.log(calc(5, "*", 8));
console.log(calc(5, "/", 8));

console.log(calc(5, "f", 8));
console.log(calc("a", "+", 8));
console.log(calc(5, "+", "a"));