// Ejercicio 779: Crear una función para encontrar la cadena más extensa en un arreglo.

function sonCadenas(cadenas) {
    for(const c of cadenas) {
        if (!(typeof c === 'string')) {
            return false;
        }
    }

    return true;
}

function obtenerCadenaMasExtensa(cadenas) {
    if (Array.isArray(cadenas)) {
        if (sonCadenas(cadenas)) {
            if (!cadenas.length) {
                throw Error('El arreglo debe tener al menos una cadena.');
            }

            if (cadenas.length === 1) {
                return cadenas[0];
            }

            let cadenaMasExtensa = cadenas[0];

            cadenas.forEach((c) => {
                if (c.length > cadenaMasExtensa.length) {
                    cadenaMasExtensa = c;
                }
            });

            return cadenaMasExtensa;
        } else {
            throw TypeError('Todos los elementos del arreglo deben ser cadenas.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(obtenerCadenaMasExtensa(['C++', 'Python', 'JavaScript', 'PHP', 'C#'])); // JavaScript
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCadenaMasExtensa('texto')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCadenaMasExtensa([1, 2, 3, 'cuatro', '5'])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCadenaMasExtensa([])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCadenaMasExtensa(Array())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCadenaMasExtensa(new Array())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCadenaMasExtensa(new Array(10))); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
