// Predicción: some true, Ana (25)
const personas = [
    { nombre: "Sara", edad: 31 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 15 }
];

console.log(personas.some(p => p.edad < 18));

personas.sort((a, b) => a.edad - b.edad);

console.log(personas);

console.log(personas.find(p => p.edad >= 18));

// Análisis: Sin ordenar devolvería Sara, porque es la primera mayor de edad.