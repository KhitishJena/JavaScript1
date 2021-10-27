let x = 19;

console.log('The table of '+x+' is: ')
for(let i =1; i<=10; i++) {
 
    let result = x * i;
    console.log(x + ' * ' + i +' = '+result);
}


//For-in, where the variable stores the array index
//For-of, where the variables stores the array elements

let x, fruits = ['Lemons','melons','Cherry'];

for(x in fruits){
    console.log(x);
    console.log(fruits[x]);
}


for(x of fruits){
    console.log(x);
}