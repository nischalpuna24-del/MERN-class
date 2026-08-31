console.log("Day 18 OOP");

// let bricks1 = {
//     name: "abc",
//     color: 'red',
//     qty: 10
// }

// let bricks2 = {
//     name: "abc",
//     color: 'orange',
//     qty: 30
// }

// let bricks3 = {
//     name: "abc",
//     color: 'green',
//     qty: 50
// }

// let bricks4 = {
//     name: "abc",
//     color: 'red',
//     qty: 10
// }

// let bricks5 = {
//     name: "abc",
//     color: 'red',
//     qty: 10
// }

// class and object
// class --> blueprint
// // object --> instance - created from class

// class BricksFacotry {
//     constructor(name, qty, color){
//         this.name = name
//         this.qyt = qty
//         this.color = color

//         console.log({name:this.name,qty:this.qty,color:this.color})
//     }

//     // methods
//     getQuantity() {
//         return this.qty
//     }

//     setQuantity(value) {
//         return this.qty = value
//     }
// }

// let b1 = new BricksFacotry("abc",30,"red")
// let b2 = new BricksFacotry("abc",30,"green")
// let b3 = new BricksFacotry("abc",30,"blue")

// // Inhertitance
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   eat() {
//     console.log("eating...");
//   }
// }

// // let a1 = new Animal()

// class Dog extends Animal {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
//   eat() {
//     console.log("dog is eating");
//   }
// }

// let d1 = new Dog("tommy", 13);

// async / sync js


console.log(1)
console.log(2)

// setTimeout(() => {
//   console.log(3)
// }, 2000)

console.log(4)

// callbacks

function greet(value,cb) {
    console.log(value)
    cb()
}

greet("hello", function good(){
    console.log("I am god")
})
