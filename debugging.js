// Example function with a bug
function calculateSum(numbers) {
    console.log('Input array:', numbers);
    
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) {  // Bug: <= should be <
        console.log(`Adding number at index ${i}:`, numbers[i]);
        sum += numbers[i];
    }
    
    console.log('Final sum:', sum);
    return sum;
}

// Example usage with debugging
const numbers = [1, 2, 3, 4, 5];

console.log('Starting calculation...');
debugger; // This line creates a breakpoint when running with node --inspect

const result = calculateSum(numbers);
console.log('Expected sum: 15');
console.log('Actual result:', result);

// To debug this code:
// 1. Run with: node --inspect debugging.js
// 2. Open Chrome and navigate to chrome://inspect
// 3. Click "Open dedicated DevTools for Node"
// 4. The debugger will pause at the breakpoint
// 5. Use Step Over (F10) to execute line by line
// 6. Observe the bug: array index out of bounds in the loop
