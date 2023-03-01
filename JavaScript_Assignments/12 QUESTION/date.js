// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// YYYY-MM-DD HH:mm format:
const d1 = new Date();
const humanReadableTime = d1.toISOString().slice(0, 16).replace("T", " ");
console.log(humanReadableTime);

// DD-MM-YYYY HH:mm format:
const d2 = new Date();
const humanReadableTime1 = d2
  .toLocaleString("en-GB", { timeZone: "UTC" })
  .replace(",", "");
console.log(humanReadableTime1);

// DD/MM/YYYY HH:mm format:
const d3 = new Date();
const humanReadableTime2 = d3
  .toLocaleString("en-GB", { timeZone: "UTC" })
  .split(",")[0]
  .replace(/\//g, "-");
console.log(humanReadableTime2);
