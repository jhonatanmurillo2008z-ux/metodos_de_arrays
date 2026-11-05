// Predicción: [15, 24]
const numeros = [2, 5, 3, 8, 1];

const resultado = numeros.map(n => n * 3).filter(n => n > 10);

console.log(resultado);

// Análisis: No cambió porque map y filter crean nuevos arrays.