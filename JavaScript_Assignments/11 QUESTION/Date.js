// Use the Date object to do the following activities

const date = new Date();

// - What is the year today?
const year = date.getFullYear();
console.log(`The current Year is ${year}`);

// - What is the month today as a number?
const month = date.getMonth(); // in js month starts from 0 & ends at 11
// To get exact month number as per our calender just add 1 in the month variable
console.log(`Month ${month + 1}`);

// - What is the date today?
const dateToday = date.getDate();
console.log(`Current date is ${dateToday}`);

// - What is the day today as a number?
const day = date.getDay();
console.log(`Current Day is ${day}`); // day also starts from 0 and ends at 6. 0 means sunday & 6 means saturday.

// - What is the hours now?
const hrs = date.getHours();
console.log(`Current Hours are ${hrs}`);

// - What is the minutes now?
const mins = date.getMinutes();
console.log(`Current minutes are ${mins}`);

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const miliSeconds = date.getTime(); // getTime() method will return milliseconds elapsed from Jan 1, 1970
const seconds = miliSeconds / 1000;
console.log(`Number of  seconds elapsed from Jan 1, 1970 are ${seconds}`);
