"use strict"

let items =[
  {name: "meat", price: 25},
  {name: "vegetable", price: 17},
  {name: "cake", price: 20},
  {name: "drinks", price: 38}
]

//How to create an array of key and no object, from the above?

let prices = [];

for (let item of items) {

  prices.push(item.price);  

}

console.log("Price list using for loop: " + prices);

//x ==> f(x)
// [x1, x2, x3,...xn] ==> [f(x1), f(x2), f(x3)...f(xn)]
// JS provide a function know as map that allows, given an array, to produce another array that is a function of x

let priceList = items.map(function(item){
  return item.price;
});

console.log("Price list after mapping: ", priceList);

//redefining map using ES6 JS syntax

priceList = items.map(item => item.price);

console.log("Price list after mapping with ES6 syntax: " + priceList);
//lines 26-28 does the same thing as line 34

