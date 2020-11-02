// Probable braces to occur
const braces = { opening: ['{', '(', '['], closing: ['}', ']', ')'] };
const stack = [];

// check whether the charecter is a braces or not
const isBraces = (char) => Object.values(braces).flat().includes(char);

// check whether the stack is empty or not
const isStackEmpty = () => !stack.length;

// check whethe the current charecter is an opening charecter or not
const isOpening = (char) => braces.opening.includes(char);

// find the top of the stack
const findTopOfStack = () => stack[stack.length - 1].toString();

// checking whether the current charecter have an matching opening braces in top of the stack
const matchBraces = (char) => {
  switch (char) {
    case ')':
      return findTopOfStack() === '(' && stack.pop(); // if top of the stack has an matching braces then pop the top
    case '}':
      return findTopOfStack() === '{' && stack.pop(); // if top of the stack has an matching braces then pop the top
    case ']':
      return findTopOfStack() === '[' && stack.pop(); // if top of the stack has an matching braces then pop the top
    default:
      return false; // if all condition fails then return false
  }
};

const balancedBraces = (string) => {
  // iterating over every charecter
  for (const char of string) {
    if (isBraces(char)) {
      if (isStackEmpty()) {
        if (isOpening(char)) stack.push(char);
        else break;
      } else if (isOpening(char)) stack.push(char);
      matchBraces(char);
    }
  }
  return isStackEmpty();
};
export { balancedBraces };
