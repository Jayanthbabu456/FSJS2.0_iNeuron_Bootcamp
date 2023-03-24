// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const fileName = "name.txt";
const extension = fileName.split(".").pop();
console.log("The extension of the file is: " + extension);
