console.log("Day 14 Functions")

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

let a = 5
function abcd() {
    a++
}
abcd()
console.log(a)


