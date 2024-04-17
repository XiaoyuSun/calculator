exports.calculate = function(expression) {
  return 0;
}

function calculate(expression) {
  const tokens = expression.split(' ');

  const stack = [];

  for (let i = tokens.length - 1; i >= 0; i--)  {
      let token = tokens[i];
      if (!isNaN(token)) {
          stack.push(parseFloat(token));
      } else {
          const operand1 = stack.pop();
          const operand2 = stack.pop();
          const result = applyOperation(token, operand1, operand2);
          stack.push(result);
      }
  }

  return stack.pop();
}

function applyOperation(operator, operand1, operand2) {
  // Apply the operation based on the operator
  switch (operator) {
      case '+':
          return operand1 + operand2;
      case '-':
          return operand1 - operand2;
      case '*':
          return operand1 * operand2;
      case '/':
          return operand1 / operand2;
      default:
          throw new Error('Invalid operator: ' + operator);
  }
}

// Test cases
console.log(calculate('0')); // Output: -1
console.log(calculate('+ 3 4'));        // Output: 7
console.log(calculate('- 3 * 4 5'));    // Output: -17
console.log(calculate('* + 3 4 5'));    // Output: 35
console.log(calculate('/ - 3 4 + 5 2'));    // Output: 35