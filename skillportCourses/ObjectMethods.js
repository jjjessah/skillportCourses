"use strict"

const myCar = {

  make: "Volvo",
  model: "S60",
  price: 42000,
  color: "Grey",

  seats: {
    material: "Leather",
    color: "Brown"
  }
}

var samsCar = Object.create(myCar);
samsCar.seats.color = "White";
/*
console.log("The effect of Object.create(): ");
console.log("Sam's Car: ", samsCar);
console.log("My Car: ", myCar);

console.log("what are the object's keys?");
console.log(Object.keys(myCar));

console.log("what are the object's values?");
console.log(Object.values(myCar));

console.log("The object's entries?");
console.log(Object.entries(myCar));*/

let s60Engine = {
  cylinders: 4,
  displacement: 2000,
  horsepower: 250
}

let yourCar = Object.assign(myCar, {engine: s60Engine}); //assign merges two objects together

/*
console.log("The effect of Object.assign(): ");
console.log("Your Car: ", yourCar;
console.log("My Car: ", myCar);*/

let herCar = Object.freeze(myCar);// returns the same object, except that the returned object is now frozen
//herCar.color = "Yellow"; //top-level modification is not permitted
herCar.seats.color = "red";

//herCar.tyres = "Pirelli";//frozen object not extensible. top level fields are frozen.
herCar.seats.bucket = true;

/*console.log("The effect of Object.freeze(): ");
console.log("Her Car: ", herCar);
console.log("My Car: ", myCar);*/

let hisCar = Object.seal(myCar);
//hisCar.color = "White";//becomes read only when strict mode is turned on. Change not permitted.
hisCar.seats.color = "White";

//hisCar.weight = 1632; //Not permitted
hisCar.seats.torque = 350;//Permitted

console.log("The effect of Object.seal(): ");
console.log("His Car: ", hisCar);
console.log("My Car: ", myCar);