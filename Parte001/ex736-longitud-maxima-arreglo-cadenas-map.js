// Ejercicio 736: Usar la función map() para obtener la cadena más extensa en un arreglo de cadenas.

// Array.prototype.map()

function cadenaMasExtensa(cadenas) {
    if (cadenas instanceof Array) {
        if (cadenas.length) {
            let longitudMaxima = cadenas[0].length;

            cadenas.map(c => longitudMaxima = Math.max(longitudMaxima, c.length));

            return cadenas.find(c => c.length == longitudMaxima);
        } else {
            throw Error('El arreglo debe tener al menos una cadena de caracteres.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(cadenaMasExtensa(['C++', 'PHP', 'JavaScript', 'Python']));  // JavaScript
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cadenaMasExtensa("['C++', 'PHP', 'JavaScript', 'Python']"));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cadenaMasExtensa([]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cadenaMasExtensa(Array()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cadenaMasExtensa(new Array()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
