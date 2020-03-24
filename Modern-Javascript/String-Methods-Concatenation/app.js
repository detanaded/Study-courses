const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming'

let val;

val = firstName + lastName;

// Concatenation. If i want a space inbetween first and last name i would use concatenation

val = firstName + ' ' + lastName;





// Append. If we want to add on to it. 
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;


// Escaping

val = 'That\'s awesome, I can\'t wait'

//  Length
val = firstName.length;


// concat()

val = firstName.concat(' ', lastName);

// Change case

val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();
val = firstName[2];

// indexof()

val = firstName.indexOf('1')
val = firstName.lastIndexOf('1')



// charAt()

val = firstName.charAt('2')

// Get last Char
val = firstName.charAt(firstName.length -1);


// substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ')
val = tags.split(',')

// replace()
val = str.replace('Brad', 'Jack')

// Includes()
val = str.includes('Bye')
console.log(val);


