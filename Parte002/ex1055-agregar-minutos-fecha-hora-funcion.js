// Ejercicio 1055: Definir una función para agregar determinada cantidad de minutos a una hora.

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function agregarMinutos(fecha, minutos) {
    if (!esFecha(fecha)) {
        throw TypeError('El primer argumento debe ser un objeto de tipo fecha.');
    }

    if (typeof minutos != 'number' || !Number.isInteger(minutos) || minutos < 0) {
        throw TypeError('El segundo argumento debe ser un número entero positivo.');
    }

    return new Date(fecha.getTime() + minutos * 60000);
}

let fecha = new Date(2021, 3, 30);
console.log(fecha);

console.log();

try {
    console.log(agregarMinutos(fecha, 30));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agregarMinutos(fecha, 90));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agregarMinutos('2021/04/30', 90));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
