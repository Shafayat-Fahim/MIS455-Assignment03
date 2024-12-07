const start = parseInt(prompt("Enter the first number of the range:"), 10);
const end = parseInt(prompt("Enter the last number of the range:"), 10);
let sum = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(`Sum of all even numbers between ${start} and ${end}: ${sum}`);
