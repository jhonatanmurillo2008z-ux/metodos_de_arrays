// Predicción: a true, b false
const a = [4, 10, 7, 12];
const b = [4, 9];

const resultadoA = a.map(n => n / 2);
const resultadoB = b.map(n => n / 2);

console.log(resultadoA, resultadoA.includes(5));
console.log(resultadoB, resultadoB.includes(5));

// Análisis: Usaría some() para comprobar una condición.