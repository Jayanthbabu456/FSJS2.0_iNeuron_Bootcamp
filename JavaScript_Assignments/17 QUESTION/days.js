//Write a program which tells the number of days in a month.

function daysInMonth(month, year) {
  if (month === 2) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else {
    return 31;
  }
}
//Find total days in March month in a non leap year
console.log(daysInMonth(10, 2023));

//Find total days in March month in a non leap year
console.log(daysInMonth(10, 2021));

//Find total days in February month in a non leap year
console.log(daysInMonth(2, 2022));
