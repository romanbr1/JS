let arr=[12, 1, -5, 45, -30, -28, -25, -40, 0, 45, 10, 55, 1, 2, 3, -3, -2, -3, 11, 14, -4, -9, 21];


console.log(arr.sort(asc));
console.log("---------------------");
console.log(arr.sort(desc));
function asc(n1, n2){
	return n1-n2;
}
function desc(n1, n2){
	return n2-n1;
}



let positiveArr = arr.filter(function(number) {
	  return number >= 0;
	});
let negativeArr = arr.filter(function(number) {
	  return number < 0;
	});
console.log("-------positiveArr--------------");
console.log(positiveArr.sort(asc));
console.log("-------negativeArr--------------");
console.log(negativeArr.sort(asc));





//task2
console.log("------------------------------------task2--------------------------------");
let arrayOfStudents=[];
let student_1={yearOfStuding:1,facultyName:'CS'};
let student_2={yearOfStuding:3,facultyName:'LANG'};
let student_3={yearOfStuding:5,facultyName:'LANG'};
let student_4={yearOfStuding:2,facultyName:'MATH'};
let student_5={yearOfStuding:3,facultyName:'MATH'};
let student_6={yearOfStuding:4,facultyName:'CS'};
let student_7={yearOfStuding:1,facultyName:'ECON'};
let student_8={yearOfStuding:1,facultyName:'ELEC'};
let student_9={yearOfStuding:2,facultyName:'ECON'};
let student_10={yearOfStuding:5,facultyName:'ELEC'};
arrayOfStudents.push(student_1, student_2,student_3,student_4,student_5,student_6,student_7,student_8,student_9,student_10);

console.log(arrayOfStudents);
console.log('-------------------');


function faculty(obj){
	return obj.facultyName;
}
let facultyNameArray= arrayOfStudents.map(faculty);
console.log(facultyNameArray);



function sumOfYears(sum, current){
	return sum + current.yearOfStuding;
}
let sumOfStudingYear = arrayOfStudents.reduce(sumOfYears,0);
console.log(sumOfStudingYear);