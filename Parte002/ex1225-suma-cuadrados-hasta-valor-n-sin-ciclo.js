// Ejercicio 1225: Calcular la suma de los n primeros números enteros cuadrados sin usar un ciclo.

// Generar el rango.

function generarRangoEnteros(inicio, final, salto=1) {
    if (typeof inicio != 'number' || typeof final != 'number' || typeof salto != 'number') {
        throw TypeError('Todos los parámetros deben ser números.');
    }

    if (!Number.isInteger(inicio) || !Number.isInteger(final) || !Number.isInteger(salto)) {
        throw Error('Todos los parámetros deben ser números enteros.');
    }

    if (final < inicio) {
        salto = -salto;
    }

    let rango = [];

    while (salto > 0 ? final >= inicio : final <= inicio) {
        rango.push(inicio);

        inicio += salto;
    }

    return rango;
}

function calcularSumaNCuadrados(n = 5) {
    let rango = generarRangoEnteros(1, n);

    return rango.reduce((a, v) => (a += v * v, a), 0);
}

console.log(calcularSumaNCuadrados(5)); // 55
console.log(calcularSumaNCuadrados(10)); // 385
console.log(calcularSumaNCuadrados()); // 55
