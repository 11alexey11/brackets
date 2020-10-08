module.exports = function check(str, bracketsConfig) {
  let arraySymbol = str.split('');
  let stack = [];
  let brackets = Object.fromEntries(bracketsConfig);
  for (let i = 0; i < arraySymbol.length; i++) {
    if (stack[stack.length - 1] === arraySymbol[i]) {
        stack.pop();
    } else if (brackets[arraySymbol[i]]) {
        stack.push(brackets[arraySymbol[i]]);
    } else {
        return false;
    }
  }
  return stack.length === 0;
}

