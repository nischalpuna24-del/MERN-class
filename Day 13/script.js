// console.log("conditional statement")

// // if, if else, switch case, early return

// let age = 16

// if(age >= 18) {
//     // statement
//     console.log("you can vote...")
// } else {
//     console.log("you cannot vote..")
// }

// // odd or even

// let num = parseInt(prompt("Enter your number"))

// if(num % 2 == 0) {
//     console.log('${num} The number is even')
// }
// else {
//     console.log('${num} The number is odd')
// }

// marks = 90 A , 70 B , 60 C

// let marks = 80

// if (marks>=90) {
//     console.log("A+")
// }else if (marks>=70) {
//     console.log("B+")
// }else if (marks>=60) {
//     console.log("C+")
// }

// marks>90? console.log("A+") : marks>80? console.log("B+") : marks>60? console.log("c+")

// function calc(80) {
//     if(marks)>=90 {
//         return "A+";
//     }
//     else if(marks)>=70 {
//         return "B+";
//     }
//     else(marks)>=60 {
//         return "C+";
//     }
// }

// let val1 = 1;
// let val2 = 3;
// let op = '-'

// switch (op) {
//   case '+':
//     console.log(val1+val2);
//     break;

//   case '-':
//     console.log(val2-val1);
//     break;
//   default:
//     console.log("not match");
// }

// let val1 = parseInt(prompt("Enter your first number")); // user inputs first number
// let val2 = parseInt(prompt("Enter your second number")); // user inputs second number
// let op = prompt("Enter the Operation you want to perform"); // user enter operation to be done for the numbers

// switch (op) {
//   case "+":
//     console.log(val1 + val2);
//     break;

//   case "-":
//     console.log(val1 - val2);
//     break;

//   case "*":
//     console.log(val1 - val2);
//     break;

//   case "%":
//     console.log(val1 - val2);
//     break;

//   default:
//     console.log("not match");
//     break;
// }


// rock paper scissor


// let user = prompt("Enter your choice: rock, paper, or scissor").toLowerCase();
// let computer = prompt("Enter computer choice: rock, paper, or scissor").toLowerCase();

// if (user === computer) {
//     console.log("It's a draw!");
// }
// else if (
//     (user === "rock" && computer === "scissor") ||
//     (user === "scissor" && computer === "paper") ||
//     (user === "paper" && computer === "rock")
// ) {
//     console.log("You won!");
// }
// else {
//     console.log("You lost!");
// }


// 1. FOR LOOP

// Syntax:
// for (starting value; condition; increment/decrement) {
//     code
// }

// Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Print numbers from 10 to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Print even numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Print odd numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// 2. WHILE LOOP

// Syntax:
// while (condition) {
//     code
// }

// Print numbers from 1 to 10

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}


// Print numbers from 10 to 1

let j = 10;

while (j >= 1) {
    console.log(j);
    j--;
}


// 3. DO...WHILE LOOP


// Syntax:
// do {
//     code
// } while (condition);

// Print numbers from 1 to 10

let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 10);


// Example showing that do...while runs at least once

let number = 20;

do {
    console.log("This will run once");
    console.log(number);
    number++;
} while (number <= 10);


// 4. FOR...IN LOOP

// Mainly used with objects

let student = {
    name: "Nischal",
    age: 22,
    course: "BIT"
};


// Print object keys

for (let key in student) {
    console.log(key);
}


// Print object values

for (let key in student) {
    console.log(student[key]);
}


// Print both key and value

for (let key in student) {
    console.log(key + " : " + student[key]);
}


// 5. FOR...OF LOOP

// Mainly used with arrays

let fruits = ["Apple", "Mango", "Banana", "Orange"];


// Print array values

for (let fruit of fruits) {
    console.log(fruit);
}


// Another example

let numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
}



// 6. FOREACH LOOP / forEach()

// forEach() is an array method

let names = ["Ram", "Shyam", "Hari", "Sita"];

names.forEach(function(name) {
    console.log(name);
});


// Using arrow function

names.forEach((name) => {
    console.log(name);
});


// Using index with forEach()

names.forEach((name, index) => {
    console.log(index, name);
});


// Using value, index and array

names.forEach((name, index, array) => {
    console.log("Name:", name);
    console.log("Index:", index);
    console.log("Array:", array);
});


// 7. FOR LOOP WITH ARRAY


let students = ["Ram", "Shyam", "Hari", "Sita"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


// 8. NESTED FOR LOOP

// A loop inside another loop

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log("i =", i, "j =", j);
    }

}

// 9. MULTIPLICATION TABLE


for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


// 10. BREAK

// break stops the loop completely

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}



// 11. CONTINUE

// continue skips the current iteration

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);
}



//function 
