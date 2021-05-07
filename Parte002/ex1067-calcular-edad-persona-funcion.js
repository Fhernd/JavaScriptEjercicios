// Ejercicio 1067: Calcular la edad de una persona utilizando una función personalizada.

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function calcularEdad(fechaNacimiento) {
    if (!esFecha(fechaNacimiento)) {
        throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).');
    }

    let diferenciaMilisegundos = Date.now() - fechaNacimiento.getTime();
    let edad = new Date(diferenciaMilisegundos);

    return Math.abs(edad.getUTCFullYear() - 1970);
}

try {
    console.log(calcularEdad(new Date(1991, 0, 13)));   // 30
} catch (e) {
    console.log(`Error: ${e.message}`);
}

try {
    console.log(calcularEdad(new Date(1964, 4, 15)));   // 56
} catch (e) {
    console.log(`Error: ${e.message}`);
}

try {
    console.log(calcularEdad(42));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
