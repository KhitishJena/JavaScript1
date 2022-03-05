function add(a,b){
 
    let c = a+b;
    console.log('Inside the function: '+ c);
    return(c);

}

function multiply(d,e){

    let f = d*e
    console.log('Inside the function: '+ f)
    return(f)

}
let add_result  = add(2,3);
console.log('Add Outside the function '+add_result);

let mul_result  = multiply(2,3);
console.log('Multiply Outside the function '+mul_result);
