#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

const readline = require('readline');

// Create interface for command line input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Validates if a value is a valid number
 * @param {string} value - The value to validate
 * @returns {boolean} True if valid number, false otherwise
 */
function isValidNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * Performs addition operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Performs subtraction operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Performs multiplication operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Performs division operation
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number|string} Quotient of a and b, or error message if dividing by zero
 */
function divide(a, b) {
  if (b === 0) {
    return 'Error: Cannot divide by zero';
  }
  return a / b;
}

/**
 * Processes the calculator operation
 * @param {number} num1 - First operand
 * @param {string} operator - Operation (+, -, *, /)
 * @param {number} num2 - Second operand
 * @returns {number|string} Result of the operation
 */
function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return 'Error: Invalid operator. Please use +, -, *, or /';
  }
}

/**
 * Main calculator loop
 */
function startCalculator() {
  console.log('\n=== Node.js CLI Calculator ===');
  console.log('Supported operations: + (add), - (subtract), * (multiply), / (divide)');
  console.log('Type "exit" to quit\n');

  const askForInput = () => {
    rl.question('Enter calculation (e.g., 5 + 3): ', (input) => {
      if (input.toLowerCase() === 'exit') {
        console.log('Goodbye!');
        rl.close();
        return;
      }

      // Parse input: "number operator number"
      const parts = input.trim().split(/\s+/);

      if (parts.length !== 3) {
        console.log('Error: Please enter in format: number operator number\n');
        askForInput();
        return;
      }

      const [num1Str, operator, num2Str] = parts;

      // Validate inputs
      if (!isValidNumber(num1Str) || !isValidNumber(num2Str)) {
        console.log('Error: Both operands must be valid numbers\n');
        askForInput();
        return;
      }

      if (!['+', '-', '*', '/'].includes(operator)) {
        console.log('Error: Invalid operator. Use +, -, *, or /\n');
        askForInput();
        return;
      }

      const num1 = parseFloat(num1Str);
      const num2 = parseFloat(num2Str);
      const result = calculate(num1, operator, num2);

      console.log(`Result: ${result}\n`);
      askForInput();
    });
  };

  askForInput();
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate,
  isValidNumber
};

// Start the calculator application only if run directly
if (require.main === module) {
  startCalculator();
}
