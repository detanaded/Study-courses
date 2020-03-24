let val;

// Number to string

val = String(5);
val = String(4+4);

// Bool to string
val = String(true);
// Date to string
val = String(new Date())

// Array to String
val = String([1,2,3,4,5])
// toString(); Method
val =(5).toString();
val = (true).toString();

// Strings to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3,4,]);

// parseInt just adds it as an integer whole numer. If we wanted to add deciles we would have to use parseFloat
val = parseInt('100');

// Output

// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());

const val1 = '5';
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);