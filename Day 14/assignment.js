// 1. create an array with three fruits and print the second fruits.

// let fruits = ["apple","banana","mango"]
// console.log(fruits[1])

// 2. Add "Apple" at the end and "Orange" at the beginning of this array:
// 	let fruits = ["Mango","Banana"]

// let fruits = ["Mango","Banana"]
// fruits.push("Apple")
// console.log(fruits)

// 3.Replace "Banana" with "Orange" in this array.
// 	let fruits = ["Banana","Mango"]

// let fruits = ["Mango","Banana"]
// fruits.splice(1,1,"Orange")
// console.log(fruits)

// 4. Remove the last item from this array using a method:
// 	let arr = [1,2,3,4,5]

// let arr = [1,2,3,4,5]
// arr.pop()
// console.log(arr)

// 5. Insert "Yellow" and "Blue" at index 1 in this array:
// 	let colors = ["Green","red"]

// let colors = ["Green","red"]
// colors.splice(1,0,"Yellow","Blue")
// console.log(colors)

// 6. Extract only the middle 3 elements from this array

// let items = [1,2,3,4,5,6,7]
// console.log(items.slice(2,5))

// 7. sort this array in alphabetical order and then reverse it:
// let items2 = [1, 23, 4, 55, 7, 8];
// items2.sort((a, b) => {
//     return a - b
// })
// items2.reverse();
// console.log(items2);

// 8. use map to cube each numbers:
// let arr = [1,2,3,4,5]
// let arr2 = arr.map((value)=>{
//     return value ** 3
// })
// console.log(arr2)

// 9. use filter() to keep only numbers divisible by 5.
// 	let arr2 = [5,2,6,55,60,7]

// // 10. use reduce() to find the total multiplication of this array
// 	let arr = [10,2,4,5]
//     let arr2 = arr.reduce((acc,val)=> {
//         return acc * val
//     })
//     console.log(arr2)

// 11. use find() to get the first number less than 10:
// let num = [12,34,56,7,88,9]
// let find = num.find((ele)=> {
// 	return ele<10
// })
// console.log(find)

// // 12. use some() to check if any student has scored below 40
// 	let marks = [45,67,89,30]
// 	let check = marks.some((ele)=> {
// 		return ele<40
// 	})
// 	console.log(check)

// 13. use every() to check if all numbers are even:
// let numbers = [2,4,6,8,12]
// let check = numbers.every((ele)=> {
// 	return ele%2===0
// })
// console.log(check)

// // 14. Destructure this array to get firstName and lastName
// 	let name = ["Ram","Prasad","Sharma"]
// 	let [firstname,,lastname] = name
// 	console.log(firstname,lastname)

// 15. merge two array using spread operator:
// let a = [1,2,4]
// let b = [3,5,6]
// let arr = [...a,...b]
// console.log(arr)

// 16. Add "Football" to the start of this array using spread:
// let sports = ["cricket", "basketball"];
// let arr = ["Football", ...sports];
// // console.log(arr.unshift("Football"))
// console.log(arr);

// 17. clone this array not by reference.
let arr3 = [1, 2, 3];
let arr2 = [...arr3];

arr2.push(5);

console.log(arr3);
console.log(arr2);
