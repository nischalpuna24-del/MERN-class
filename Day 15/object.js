console.log("object in day 15")

const obj = {
    name: "ram",
    age: 12,
    isAdmin:false
}

obj.name = "shyam"
console.log(obj)
// console.log(obj.age)
console.log(obj['age'])


// NESTED OBJECT
const user = {
    name: "ram",
    age: 30,
    location: {
        city: "kathmandu",
        postalcode: 466000,
    }
}

console.log(user?.location.city)

// OPTIONAL CHAINING ?