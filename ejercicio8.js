// Predicción: a mayor 9 y true, b mayor 4 y false
const a = [4, 9, 2, 7];
const b = [4, -1, 2];

const mayorA = a.reduce((mayor, n) => n > mayor ? n : mayor, a[0]);
const mayorB = b.reduce((mayor, n) => n > mayor ? n : mayor, b[0]);

console.log("a:", mayorA, a.every(n => n > 0));
console.log("b:", mayorB, b.every(n => n > 0));

