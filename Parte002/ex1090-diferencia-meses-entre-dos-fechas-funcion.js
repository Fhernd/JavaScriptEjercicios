// Ejercicio 1090: Calcular la cantidad de meses que hay entre dos fechas sobre una función.

function calcularDiferenciaMeses(fecha1, fecha2) {
    if (!(fecha1 instanceof Date) || !(fecha2 instanceof Date)) {
        throw TypeError('Ambos argumentos deben ser objetos de tipo fecha (Date).');
    }

    let meses = (fecha2.getFullYear() - fecha1.getFullYear()) * 12;
    meses -= fecha1.getMonth();
    meses += fecha2.getMonth();

    return meses;
}

try {
    console.log(calcularDiferenciaMeses(new Date(2020, 0, 1), new Date(2021, 0, 1)));   // 12
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularDiferenciaMeses(new Date(2020, 0, 1), new Date(2021, 2, 1)));   // 14
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularDiferenciaMeses(new Date(2020, 0, 1), new Date(2020, 2, 1)));   // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}
