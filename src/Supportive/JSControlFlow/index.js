/* ----IF STATEMENTS ------- */
//If hour is between 6am and 12pm: Goodmorning
//If hour is between 12am and 6pm: Good Afternoon
//Otherwise Goodmorning

let hour = 12;

if (hour >= 6 && hour < 12) {
	console.log('Good Morning');
} else if (hour >= 12 && hour < 18) {
	console.log('Good Afternoon');
} else console.log('Good Evening');

/* --------- SWITCH STATEMENTS-------- */
//Switch and Case
// we use swith to compare the value of a variable with the value of other variables. They are a little bit outdated. I Personally prefer using if statements,

/*
switch (variable){
case 'comparison1': 
        - 1 or more statements  
        - break -> if we dont add this brake the rest of the cases will be executed too.
case 'comparison2' :
      - 1 or more statements
      - break

default :  -> none of the cases 
      - 1 or more statements
      - no need of breaking as it jumps out of the swithc
}     
 */

let role = 'guest';
switch (role) {
	case 'guest':
		console.log('Guest User');
		break;
	case 'moderator':
		console.log('Moderator User');
		break;
	default:
		console.log('Unknown user');
}

/* LOOPS */

// For, While, Do..While, For... in, For.. of

/* ------------ FOR LOOPS---------- */
/* for(initialize a variable; condition; increment){
  doSomething repetitively until the condition is met
}
  After the first iteration our variable will be incremented (or decremented).

  our variable is usable inside the for loop and not outside.
  in while loops it is different because we declare it outside the loop
*/

for (let i = 0; i < 5; i++) {
	if (i % 2 !== 0) console.log(i);
}

/*  ------------ WHILE LOOPS---------- */

// In while loops we declare the variable outside the loop
// while ( condition ){
// do something until the condition is not met;
// increment;
//}

let i = 0;
while (i <= 5) {
	if (i % 2 !== 0) console.log(i);
	i++;
}

/* ------------- DO-WHILE LOOPS ------------ */
/* 
do-while we declare our variable outside the loop too. 
it will execute the code at least once
do{
statement
} while (condition)
*/

do {
	if (i % 2 !== 0) console.log(i);
	i++;
} while (i <= 5);

/* ------------ FOR-IN LOOPS -------------- */
/* 
for..in and for...of are used to iterate over objects or elements of an Array
*/

const person = {
	name: 'Juan',
	age: 35,
};

//in the for... in the key variable will hold the name of one of the properties in this object. It is common to use for... in to iterate objects, but not arrays
for (const key in person) {
	console.log(key, person[key]);
	//name
	//age
}

//to access to the values of an object we can use either dot notation object.property or person.name
// or bracket notation person['name']

// when do we use dot and when bracket?? If we don't know ahead
//of time the property we will access. for example, the age will be calculated during runtime. and we cannot access to this property while writing the code

/* In our previous example, we cannot use dot notation for accesing the properties
we cannot do person.key because it doesn't exist. This key variable will change during runtime and store the objects properties but we cannot access ahead of time. It is in this case we use Bracket notation
*/

// we can iterate over arrays with for in but its better to use for of

const colors = ['red', 'blue','green'];
for (const key in colors) {
	console.log(key, '-', colors[key]);
}

/*  -----------FOR-OF LOOPS ---------- */

// we use for..of to iterate over elements of an array

const names = ['Paul', 'John', 'George', 'Ringo'];
for (const name of names) {
	console.log(name);
}

/* ----------- BREAK AND CONTINTUE--------- */

//Break - ends the loop
//Continue - ends the current iteration and jumps to the next one