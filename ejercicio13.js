// Predicción: a true, b false
const a = [4, 7, 10, 3, 8];
const b = [4, -2, 10];

console.log("a:", a.every(n => n > 0));
console.log("Pares:", a.filter(n => n % 2 === 0));

console.log("b:", b.every(n => n > 0));
console.log("Pares:", b.filter(n => n % 2 === 0));