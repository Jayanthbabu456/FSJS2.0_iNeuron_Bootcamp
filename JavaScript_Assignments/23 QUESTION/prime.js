//Write a program to check that the number given by the user is a prime number or not.
const number = 3;
let isPrime = true;

// check if number is less than 2, then it is not a prime number
if (number < 2) {
  isPrime = false;
}

// loop from 2 to number-1, check if any number divides the input number evenly
for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${number} is a prime number`);
} else {
  console.log(`${number} is not a prime number`);
}
