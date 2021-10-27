/****This is arithmetic operator*******/
// x++ is post increment operator
// ++x is pre increment operator

let x,y,add,sub,mul,exponential,Result;
x=5;
y=2;

add = x + y;
sub = x - y;
exponential = x**y;
mul = x * y;
mod = x % y;
Result = x * ++x;


console.log('Exponential Result is: '+exponential);
console.log('Addition Result is: '+add);
console.log('Subtraction Result is: '+sub);
console.log('Multiply Result is: '+mul);
console.log('Mod Result is: '+mod);
console.log('Increment Result is: '+Result);


/******This is Assigment operators*****/

let a = 10, b, c=3;
b = a + 20;

c**=c;                          // +=, -=, *=, /=, **=, %= operator and Assign notations
console.log(b);                    
console.log(c);


/******This is Comparision/Relational operators*****/

/* == equals to value
   === equal value and type
   != not equal value
   !== not equal value and type
   < greater than
   > less than
   >= greater than or equal
   <= less than or equal
   ? ternary operator
*/

let d =10, e='10', comparision, comparision1, comparision2;
comparision = d==e;
comparision1 = d===e;
comparision2 = comparision ? comparision : comparision1;

console.log(comparision);
console.log(comparision1);
console.log(comparision2);



/******This is Logical operators*****/

/*
    && Logical AND--Both of the conditions are true, then true
    || Logical OR--any of the conditions are true, then true
    ! Logical NOT--reverses the value
*/

let A = true;
let B = false;

console.log(A&&B);
console.log(A||B);
console.log(!B);


/******This is Type operators*****/

/* 
    typeof ----- returns the data type of the variable
    instanceof -- returns true if an object(object of any class) is instance of an object type, 
                return type is boolean 
*/

let firstName = 'satish';
let age = 30;

let lastName = new String('jena');

console.log(typeof firstName);
console.log(typeof age);
console.log(lastName instanceof String);


/******This is Bitwise operators*****/
/*

&      AND sets each bit to 1 if both bits are 1
|      OR sets each bit to 1 if one of two bits is 1
^      XOR sets each bit to 1 if only one of two bits is 1
~      NOT inverts all the bits
＜＜   Left Shift shifts left and fills empty spaces with 0
＞＞   Right Shift shifts right

*/