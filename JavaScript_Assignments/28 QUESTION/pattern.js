// Write a program to print the given patterns using the loops-
//	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
//    *
//    **
//    ***

const n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

const num = 5;
for (let i = 0; i < num; i++) {
  console.log("*".repeat(num));
}

// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//  	 *****

const number = 3;
for (let i = 0; i < number; i++) {
  console.log(
    " ".repeat(number - i - 1) +
      "*".repeat(2 * i + 1) +
      " ".repeat(number - i - 1)
  );
}
