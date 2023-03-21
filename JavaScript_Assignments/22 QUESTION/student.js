// The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
// - Find the median age(one middle item or two middle items divided by two)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age (one middle item or two middle items divided by two)
const middleIndex = Math.floor(ages.length / 2);
const medianAge =
  ages.length % 2 === 0
    ? (ages[middleIndex] + ages[middleIndex - 1]) / 2
    : ages[middleIndex];

// Find the average age (all items divided by number of items)
const sumOfAges = ages.reduce((acc, cur) => acc + cur, 0);
const averageAge = sumOfAges / ages.length;

// Find the range of the ages (max minus min)
const ageRange = maxAge - minAge;

// Compare the value of (min - average) and (max - average), use abs() method in javascript
const diff1 = Math.abs(minAge - averageAge);
const diff2 = Math.abs(maxAge - averageAge);

console.log(`Min age: ${minAge}`);
console.log(`Max age: ${maxAge}`);
console.log(`Median age: ${medianAge}`);
console.log(`Average age: ${averageAge}`);
console.log(`Age range: ${ageRange}`);
console.log(`Difference between min and average: ${diff1}`);
console.log(`Difference between max and average: ${diff2}`);
