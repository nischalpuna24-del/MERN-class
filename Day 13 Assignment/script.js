// 1. Print numbers from 1 to 10 using for loop

console.log("1. Numbers from 1 to 10:");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Print numbers from 10 to 1 using while loop

console.log("2. Numbers from 10 to 1:");

let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

// 3. Print odd numbers from 1 to 30 using for loop

console.log("3. Odd numbers from 1 to 30:");

for (let i = 1; i <= 30; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// 3. Print odd numbers from 1 to 30 using while loop

console.log("3. Odd numbers using while loop:");

let j = 1;

while (j <= 30) {
  if (j % 2 != 0) {
    console.log(j);
  }

  j++;
}

// 4. Multiplication table of 7

console.log("4. Multiplication table of 7:");

for (let i = 1; i <= 10; i++) {
  console.log("7 x " + i + " = " + 7 * i);
}

// 5. Find the sum of numbers from 1 to 10

console.log("5. Sum of numbers from 1 to 10:");

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

console.log("Sum =", sum);

// 6. Stop the loop if number is divisible by 7

console.log("6. Stop when number is divisible by 7:");

for (let i = 1; i <= 20; i++) {
  if (i % 7 == 0) {
    break;
  }

  console.log(i);
}

// 7. Skip numbers that are even

console.log("7. Skip even numbers:");

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    continue;
  }

  console.log(i);
}
