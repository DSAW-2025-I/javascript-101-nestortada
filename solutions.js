// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Los Numeros de a y b  no son adecuados");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    console.log("El numero N es adecuado");
    return;
  }
  if (n === 0) return 1;
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.some(isNaN)) {
    console.log("El array no es el adecaudo");
    return;
  }
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== "string") {
    console.log("El string no es adecuado");
    return;
  }
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== "number") {
    console.log("El numero N no es adecuado");
    return;
  }
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
