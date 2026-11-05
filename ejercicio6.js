// Predicción: Sara será reemplazada por Camila.
const nombres = ["Ana", "Luis", "Sara", "Pedro"];

let indice = nombres.indexOf("Sara");

if (indice !== -1) {
    nombres.fill("Camila", indice, indice + 1);
}
console.log(nombres);

// Usando splice
indice = nombres.indexOf("Camila");

if (indice !== -1) {
    nombres.splice(indice, 1, "Sara");
}
console.log(nombres);

// Probar con un nombre que no existe
indice = nombres.indexOf("Juan");

if (indice !== -1) {
    nombres.splice(indice, 1, "Camila");
}
console.log(nombres);