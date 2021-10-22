// Ejercicio 1275: Calcular la cantidad de días que tiene un año dado.

function esAgnioBisiesto(agnio) {
    return agnio % 400 == 0 || (agnio % 100 != 0 && agnio % 4 == 0);
}

function obtenerCantidadDias(agnio) {
    if (typeof agnio != 'number' || !Number.isInteger(agnio )) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    return esAgnioBisiesto(agnio) ? 366 : 365;
}

console.log(obtenerCantidadDias(1600)); // 366
console.log(obtenerCantidadDias(2001)); // 365
console.log(obtenerCantidadDias(2021)); // 365
console.log(obtenerCantidadDias(2032)); // 366
