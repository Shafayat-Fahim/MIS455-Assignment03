const startYear = parseInt(prompt("Enter the starting year:"), 10);
const endYear = parseInt(prompt("Enter the ending year:"), 10);
let leapYears = 0;

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapYears++;
    }
}
console.log(`Total leap years between ${startYear} and ${endYear}: ${leapYears}`);
