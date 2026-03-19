// 3) In assignment 1 code add 
//    result function which accept 2 parameters 
//     result(error , result)
//     and add condition check in divide & multiplication function 
//    if 2nd parameter is zero display error message 


function result (e, r)
{
    if(e)
    {
        console.log(e.message)
    }
    else{
        console.log(`result: ` + r)
    }
}


function add(a, b)
{
    return "Addition is: " + (a+b);
}
function multiply(a, b, callback)
{
    if(b == 0)
    {
        callback(new Error("Subtract by zero will always give zero as output"), null)
    }
    else
    {
        callback(null, (a*b))
    }
    //return "Multiplication is: " + (a*b);
}
function divide(a, b, callback)
{
    if(b == 0)
    {
        callback(new Error("Division by zero is not possible"), null)
    }
    else
    {
        callback(null, (a/b))
    }
    //return "Division is: " + (a/b);
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
console.log(multiply(20, 0, result));
console.log(divide(60, 0, result));
console.log(multiply(60, 2, result));
console.log(divide(60, 2, result));
console.log(demo(50, 10, subtract));