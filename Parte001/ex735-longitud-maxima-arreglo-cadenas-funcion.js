// Ejercicio 735: Crear una función para obtener la cadena más extensa en un arreglo de cadenas.

function cadenaMasExtensa(cadenas) {
    if (cadenas instanceof Array) {
        if (cadenas.length) {
            let cadena = cadenas[0];
            let longitud = cadena.length;

            for(let i = 1; i < cadenas.length; ++i) {
                if (cadenas[i].length > longitud) {
                    cadena = cadenas[i];
                    longitud = cadena.length;
                }
            }

            return cadena;
        } else {
            throw Error('El arreglo debe tener al menos una cadena.');
        }
    } else {
        throw TypeError('El argumento de esta función debe ser un arreglo.');
    }
}

try {
    console.log(cadenaMasExtensa(['C#', 'PHP', 'JavaScript', 'Python']));   // JavaScript
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cadenaMasExtensa("['C#', 'PHP', 'JavaScript', 'Python']"));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cadenaMasExtensa([]));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cadenaMasExtensa(Array()));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cadenaMasExtensa(new Array()));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
