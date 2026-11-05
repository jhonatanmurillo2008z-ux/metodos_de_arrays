// Predicción: promedio 120, resultado [80, 60, 90]
const precios = [120, 80, 250, 60, 90];

if (precios.length > 0) {
    const promedio = precios.reduce((a, n) => a + n, 0) / precios.length;

    console.log("Promedio:", promedio);

    if (promedio > 100) {
        console.log(precios.filter(n => n < promedio));
    }
}

// Análisis: Si está vacío no se divide. Se evita comprobando length.