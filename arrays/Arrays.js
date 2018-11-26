//task 1
let products = [ 'Apple', 'Orange', 'Plum' ];
console.log(products[products.length - 1]);

// task 2
console.log('----task 2------------------');
let styles = [ 'Jaz', 'Bluz' ];
styles.push('Rock n Roll');
styles.splice(-2, 1, 'Classic');
console.log(styles.shift());
styles.unshift('Rep', 'Reggi');
console.log(styles);

// task 3
console.log('----task 3------------------');
let fruits = [ 'Apple', 'Orange', 'Plum' ];
function find(arr, value) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == value) 
			return i;
		}
	return -1;
}
console.log(find(fruits, 'Plum'));

//task 4
console.log('----task 4------------------');
let cars = [ 'Audi', 'Mersedes', 'BMW','Toyota','Mazda','Ford','Subaru','VW' ];
function filterRange(arr, a, b) {
	if (a>b){
		let c;
		c=a;
		a=b;
		b=c;
	}
	if ((a<0)||(a>arr.length)||(b<0)||(b>arr.length)){
		console.log('Out of range');
	}
	
	return arr.slice(a-1,b);
	
}
console.log(filterRange(cars,2,4));



//task 5
console.log('----task 5------------------');
function camelize (str){
	str=str.toLowerCase();
	let arr2=[];
	let arr = str.split('-');
	for(i=1;i<arr.length;i++){
		arr2[i]=arr[i][0].toUpperCase() + arr[i].slice(1);
	}
	return str = arr[0]+arr2.join('');

}
console.log(camelize('my-short-string'));
console.log(camelize('new-variable-contains-array-of-string'));



