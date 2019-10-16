module.exports = function zeros(expression) {
  // your solution

  const arr = expression.split('*');

  const res = arr.reduce((acc, elem) => {
    const step = str => /!!/.test(str) ? 2n : 1n;
    const factorial = num => num <= 1n ? 1n : BigInt(num) * factorial(BigInt(num) - step(elem));
    return factorial(parseInt(elem)) * acc;
  }, 1n);
  return /0+$/.test(String(res)) ? String(res).match(/0+$/).join('').length : 0;
}
