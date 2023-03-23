// Write a program to print all the prime number between 0 to 100 (0 and 100 included).
// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Print all prime numbers between 0 and 100
for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
