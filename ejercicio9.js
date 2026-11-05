// Predicción: índice 1 y -1 si ninguno cumple.
const productos = [
    { nombre: "Lápiz", precio: 50 },
    { nombre: "Cuaderno", precio: 120 },
    { nombre: "Libro", precio: 200 }
];

console.log(productos.findIndex(p => p.precio > 100));
console.log(productos.findIndex(p => p.precio > 500));

// Análisis: find devolvería el objeto del primer producto encontrado.  