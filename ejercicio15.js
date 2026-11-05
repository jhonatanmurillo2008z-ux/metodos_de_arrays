// Predicción: ["rojo", "azul", "verde"] y lista combinada
const colores = ["rojo", "azul", "verde", "amarillo", "negro"];
const secundarios = ["naranja", "violeta"];

const primeros = colores.slice(0, 3);
const combinados = primeros.concat(secundarios);

console.log(primeros);
console.log(combinados);
console.log(colores);

// Análisis: Comprobé que colores sigue teniendo sus 5 elementos.
