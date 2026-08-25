console.log("Array");

// let arr = [1,2,3,4,5,6]

// indexing
// console.log(arr[0])
// console.log(arr[4])

// always remove last element of array
// arr.pop()

// always remove first element of array
// arr.shift()

// add elements from the end
// arr.push(888)

// add elements from the first
// arr.unshift(0)

// provide number of elements inside the array
// console.log(arr.length)

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// arr.splice(2,0,5)

// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// console.log(arr.slice(2,3))

// shows the elements of the array in reverse order
// arr.reverse()

// arr.sort((a,b)=> {
//     return a-b
// })

// console.log(arr)

// Performs the specified action for each element in an array.
// arr.forEach((element)=>{
//     console.log(element + 1)
// }
// )

// for(let element of arr) {
//     console.log(element)
// }

// map, filter, reduce

let arr = [1, 2, 3, 4, 5,98]

// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// let new_arr = arr.map((value)=> {
//     return value * value
// }
// )
// console.log(new_arr)

// Returns the elements of an array that meet the condition specified in a callback function.
// let filtere_data = arr.filter((elem)=> {
//     return elem%2===0
// })

// console.log(filtere_data)

// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
let acc_value = arr.reduce((acc, val)=>{
    return acc  + val
}, 0)

console.log(acc_value)