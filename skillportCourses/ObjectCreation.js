"use strict"
/*
let firstItem = {
  id: 1,
  name: "laptop",
  price: 500
};//JS object

let seconItem = {
  id: 2, 
  name: "watch", 
  price: 240,
  brand:"Sonical"
};
// How to access the value of the name property
// Syntax: <obj_name>.<key>
console.log(`firstItem has a name of ${firstItem.name} and a price of ${firstItem.price}`);
console.log(`secondItem has a name of ${seconItem["name"]} and a price of ${seconItem["price"]}`);
*/
/*
const USD_EUR = 0.9;
let thirdItem = {
  id:3,
  name: "headphones",
  brand: "Sonical",
  price: 84,
  priceEUR: this.price * USD_EUR
};
console.log(`Price of thirdItem in Euros is ${thirdItem.priceEUR}`);
//we get a NaN because the property of an object cannot be an expression; it has to be a fucntion.

thirdItem = {
  id:3,
  name: "headphones",
  brand: "Sonical",
  price: 84,
  priceEUR: function(){return this.price * USD_EUR}
};
console.log("Price of thirdItem in Euro is: ", thirdItem.priceEUR());

console.log(`Price of thirdItem in Euro is ${thirdItem.priceEUR()}`);

//another way to detine thirdItem without the function keywork

thirdItem = {
  id:3,
  name: "headphones",
  brand: "Sonical",
  price: 84,
  priceEUR(){return this.price * USD_EUR}//ES6 syntax
};

console.log(`another to display is ${thirdItem.priceEUR()}`);

//to add a property to an object that has already been created

thirdItem.mfgCountry = "Canada";
console.log("Updated object is now: ",thirdItem);
*/

let fourthItem = new Object();

fourthItem.id = 4;
fourthItem.name = "cell phone";
fourthItem.price = 450;

console.log("The fourthItem is:", fourthItem);

delete fourthItem.price;

console.log("The fourthItem is:", fourthItem);