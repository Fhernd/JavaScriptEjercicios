// Ejercicio 1089: Calcular la cantidad de semanas que hay entre dos fechas sobre una función.

function calcularDiferenciaSemanas(fecha1, fecha2) {
    if (!(fecha1 instanceof Date) || !(fecha2 instanceof Date)) {
        throw TypeError('Ambos argumentos deben ser objetos de tipo fecha (Date).');
    }

    let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000;
    diferencia /= (60 * 60 * 24 * 7);

    return Math.abs(Math.round(diferencia));
}

console.log(new Date());

console.log();

try {
    console.log(calcularDiferenciaSemanas(new Date(), new Date(new Date().setDate(new Date().getDate() + 1))));    // 0
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularDiferenciaSemanas(new Date(2023, 1, 1), new Date(2023, 1, 2))); // 0
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularDiferenciaSemanas(new Date(2023, 1, 1), new Date(2023, 1, 28))); // 4
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularDiferenciaSemanas(new Date(2023, 0, 1), new Date(2024, 0, 1))); // 52
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularDiferenciaSemanas(42, new Date(2023, 1, 2))); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
