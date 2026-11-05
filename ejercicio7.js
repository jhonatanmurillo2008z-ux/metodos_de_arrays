// Predicción: "manzana, pera, uva"
const frutas = ["manzana", "kiwi", "pera", "uva"];

const resultado = frutas.filter(f => f.includes("a")).join(", ");

console.log(resultado);

// Análisis: join convierte el array en texto y filter necesita un array.