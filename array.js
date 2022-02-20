let numbers = [1,2,3,4,5];
let x, fruits = ['Lemons','melons','Cherry'];
let cars = new Array('Ford', 'Toyota', 'Merc', 'Maruti');

console.log(numbers);
console.log(fruits);
console.log(cars);
console.log(cars[1]);
console.log('Before Addition of an Array element '+ cars[1]);
console.log(cars.length); //Gives the length of the Array.


//Adding Element to an Array
cars[1] = 'Honda' //Replaces the element at the specified index.
console.log(cars);
console.log('After Addition of an Array element '+ cars);

cars.push('Toyota'); //Adds element to the end of the Array.
console.log(cars);
console.log(cars.length); //Gives the length of the Array.


/*******************ARRAY METHODS********************/

let fruits1 = ['Apple', 'Banana', 'Grapes'];
console.log(fruits1);

fruits1.pop(); //Removes the last element of the Array.
console.log(fruits1);

fruits1.shift(); //Removes the first Element of the array
console.log(fruits1);

fruits.push('AshGoud');  //Adds element to the end of the Array.
fruits.push('Grapes');
fruits.push('Guava');
console.log(fruits); 

fruits.unshift('Cherry') //Adds element to the start of the Array.
console.log(fruits);

let deletedSpliceFruits = fruits.splice(0,3);
console.log(deletedSpliceFruits);
console.log(fruits);

let evenNumbers = new Array (2,4,6);
let oddNumbers = new Array (1,3,5);

let numbers = evenNumbers.concat(oddNumbers);
console.log(numbers);

let numbers1 = evenNumbers.copyWithin(2,0,2);
console.log(numbers1);
