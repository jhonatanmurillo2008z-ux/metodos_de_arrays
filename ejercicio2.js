// Predicción: invertido ["estrella", "mar", "luna", "sol"]
const palabras = ["sol", "luna", "mar", "estrella"];

palabras.reverse();

const encontrada = palabras.find(p => p.length > 3);

console.log(palabras);
console.log(encontrada);

// Análisis: Sin reverse encontraría "luna". El array original se modificó.     