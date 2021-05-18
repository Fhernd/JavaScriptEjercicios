// Ejercicio 1087: Calcular la cantidad de horas que hay entre dos fechas dentro de una función.

function calcularDiferenciaHoras(fecha1, fecha2) {
    if (!(fecha1 instanceof Date) || !(fecha2 instanceof Date)) {
        throw TypeError('Ambos argumentos deben ser objetos de tipo fecha (Date).');
    }

    let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000;
    diferencia /= (60 * 60);

    return Math.abs(Math.round(diferencia));
}

console.log(new Date());

console.log();

try {
    console.log(calcularDiferenciaHoras(new Date(), new Date(new Date().setDate(new Date().getDate() + 1))));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularDiferenciaHoras(new Date(2023, 1, 1), new Date(2023, 1, 2))); // 24
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularDiferenciaHoras(42, new Date(2023, 1, 2))); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
