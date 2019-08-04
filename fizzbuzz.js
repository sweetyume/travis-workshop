module.exports = function (num) {
  if (num % 15 === 0) return 'FIZZBUZZ';
  if (num % 5 === 0) return 'BUZZ';
  if (num % 3 === 0) return 'FIZZ';
  return num
}