// Predicción: [5, 20, 30, 40, 50]
const numeros = [10, 20, 30, 40];

console.log("shift:", numeros.shift());
console.log("unshift:", numeros.unshift(5));
console.log("push:", numeros.push(50));

console.log(numeros);

// Análisis: unshift y push devuelven la nueva longitud.