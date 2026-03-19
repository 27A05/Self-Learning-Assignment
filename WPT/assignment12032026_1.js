const book = {
  Name: "Advanced Computing",
  Author: "CDAC",
  Price: "120"
};

let {Name, Author} = book;

console.log(Name);
console.log(Author);

let Car = {Name:"Nexon", Company:"Tata"};

console.log(Car);

// let myJSON = JSON.stringify(Car);
// console.log(Car);

const myObj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(myObj);


console.log(myObj);