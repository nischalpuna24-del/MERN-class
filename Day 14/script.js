console.log("Day 14 Functions");

// // rest operators

// function abcd(...data) {
//     console.log("form function", data)
// }

// // return

// function ab() {
//     return 12
// }

// console.log(ab())

// first class function

// function sum(a) {
//     a()
// }

// sum(function abcd() {
//     console.log("I am a first class function")
// })

// higher order function
// either return function or accept any function in its parameter

// function sum(a) {
//     function abcd() {
//         console.log("Hellow from higher order function")
//     }
// }
// // sum(function abcd() {
// //     console.log("I am a first class function")
// // })

// console.log(sum())

// pure and impure function
// let a = 5
// function abcd() {
//     console.log("Hello")
// }
// abcd()
// console.log(a)

// let a = 5
// function abcd() {
//     a++
// }
// abcd()
// console.log(a)

// closure

// function abcd() {
//   let a = 10;
//   return function abcd2() {
//     console.log(a);
//   }
// }

// abcd()()


// lexical scoping
// function abcd() {
//   let a = 10;
//   function abcd2() {
//     let b = 4
//     console.log(a)
//     function abcd3() {
//         console.log(a)
//         console.log(b)
//     }
//   }
// }
// abcd()()()

// IIFE -Immediately Envked Function Expression
// (function abcd(){
//   console.log('Hello there')  
// })()

// hoisting
// hello()
// function hello() {
//     console.log("Function statement")
// }

// h1()
// let h1 = function() {
//     console.log("Function expression")
// }


// function sum(a,b) {
//     console.log(a+b)
// }

// sum(12,4)
// sum(14,4)
// sum(12,56)

