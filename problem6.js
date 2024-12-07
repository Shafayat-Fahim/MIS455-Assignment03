function calculateAverage(start, end, isEven) {
    let sum = 0;
    let count = 0;

    for (let i = start; i <= end; i++) {
        if (isEven ? i % 2 === 0 : i % 2 !== 0) {
            sum += i;
            count++;
        }
    }

    return count > 0 ? sum / count : 0;
}

const start = parseInt(prompt("Enter the starting number:"), 10);
const end = parseInt(prompt("Enter the ending number:"), 10);

const evenAvg = calculateAverage(start, end, true);
const oddAvg = calculateAverage(start, end, false);

console.log(`Average of even numbers: ${evenAvg}`);
console.log(`Average of odd numbers: ${oddAvg}`);
