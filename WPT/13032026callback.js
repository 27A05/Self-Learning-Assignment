// 1) write a function addition  , multiplication 
//                               division , subtraction which accepted 2 parameters   
// 	write result function which accept 3 parameters 
     
//                result (a1 , a2 , callback)

// pass callback parameters while calling 


function add(a, b)
{
    return "Addition is: " + (a+b);
}
function multiply(a, b)
{
    return "Multiplication is: " + (a*b);
}
function divide(a, b)
{
    return "Division is: " + (a/b);
}
function subtract(a, b)
{
    return "Subtraction is: " + (a-b);
}

function demo (a, b, callback)
{
    return callback(a, b);
}

console.log(demo(5, 5, add));
console.log(demo(20, 1, multiply));
console.log(demo(60, 2, divide));
console.log(demo(50, 10, subtract));

