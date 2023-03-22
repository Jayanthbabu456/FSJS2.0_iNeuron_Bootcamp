// Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
//	If the number given by the user is 2 then the output should look like this-
//	2 * 1 = 2
//	2 * 2 = 4
//	2 * 3 = 6 and so on till 2 * 10 = 20.

const number = 3;

//creating a multiplication table
for (let i = 1; i <= 10; i++) {
  // multiply i with number
  const result = i * number;

  // display the result
  console.log(`${number} * ${i} = ${result}`);
}
