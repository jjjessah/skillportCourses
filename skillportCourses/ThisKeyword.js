"use sctrict"
/*console.log('Is this === window?', this === window);
console.log("What is this ", this);

var age = 35;//window object.
console.log("window.age: ", window.age);
console.log("this.age: ", this.age);

this.age = 55;//In the global context, this points to the window object.
console.log("window.age: ", window.age);
console.log("age: ", age);

let someFunction = () => this;//returns this.
console.log("this returned from a function: ", someFunction());

var test = ()=>this.age;
console.log(test);
*/
/*
let myCar = {
  make: "Volvo",
  model: "S60",
  price: 42000,
  printDetails(){
    console.log(`
    Make: ${this.make} 
    Model: ${this.model}
    Price: $${this.price}`);//this refers to myCar Object
  },
  engine:{
    cylinders: 4,
    displacement: 2000,
    horsepower: 250,
    printDetails(){
      console.log(`
      Displacement: ${this.displacement}cc
      Horsepower: ${this.horsepower}bhp`)
    }//this here refers to engine object
  }
}
console.log("The fields of myCar:")
myCar.printDetails();

console.log("Engine details: \n");
myCar.engine.printDetails();
*/

let myCar = {
  make: "Volvo",
  model: "S60",
  price: 42000,
  engine: {
    cylinder: 4,
    displacement: 2000,
    horsepower: 250
  }
};

function printCarDetails(){
  console.log(`
    Make: ${this.make} 
    Model: ${this.model}
    Price: $${this.price}`);
}

function printEngineDetails(){
  console.log(`
      Displacement: ${this.displacement}cc
      Horsepower: ${this.horsepower}bhp`)
}

console.log("Car details: \n");
printCarDetails.call(myCar);
printEngineDetails.call(myCar.engine);

//defining these functions outside the object allows us to reuse them in other objects of the same structure by simply referencing those objects as arguments of call function

//using the keyword prototype is a mean to implement inheritance in JavaScript

/*function Book (title, author, numPage, price){
  this.title = title;
  this.author = author;
  this.numPage = numPage;
  this.price = price;
  Book.prototype.getTotalPrice:function(){};
}
*/
