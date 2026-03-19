// 4) understand promise concept and implement
// in your code 


let p = new Promise((resolve, reject) => {
    let n = 9;
    if(n % 2 ==0) resolve("number " + n + " is even number"), reject("false")
});

p.then((message => console.log(message)))
 .catch((error) => console.log(error))