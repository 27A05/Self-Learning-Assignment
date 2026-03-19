// 5) write a code which contains 
//    normal function 
//    setTimeout
//    Promise
//    Console.log()

// and understand execution sequence 

function normalFunction()
{
    console.log("1.Normal Function executed");
}

function timeoutFunction()
{
    setTimeout(function()
    {
        console.log("4.setTimeout executed after 2 seconds");
    }, 2000);
}

function promiseFunction()
{
    let promise = new Promise(function(resolve, reject)
    {
        console.log("2.Progran Started");
        resolve("3.Program resolved");
    });

    promise.then(function (result)
    {
        console.log(result);
    });
}

console.log("Program Start");

normalFunction();
timeoutFunction();
promiseFunction();

console.log("Program End");