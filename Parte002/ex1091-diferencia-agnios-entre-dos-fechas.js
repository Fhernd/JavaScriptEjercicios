// Ejercicio 1091: Calcular la diferencia en años entre dos fechas específicas.

function diferenciaAgnios(fecha1, fecha2) {
    if (!(fecha1 instanceof Date) || !(fecha2 instanceof Date)) {
        throw TypeError('Ambos argumentos deben ser objetos de tipo fecha (Date)');
    }

    let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000;

    diferencia /= (60 * 60 * 24);
    diferencia /= 365.25;

    return Math.abs(Math.round(diferencia));
}

console.log(new Date());

console.log();

try {
    console.log(diferenciaAgnios(new Date(), new Date(2043, 0, 1)));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(diferenciaAgnios(new Date(2023, 0, 1), new Date(2043, 0, 1)));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(diferenciaAgnios(42, new Date(2043, 0, 1)));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
