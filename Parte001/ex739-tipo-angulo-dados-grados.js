// Ejercicio 739: Crear una función para determinar el tipo de ángulo a partir de un número de grados.

// < 90 -> ángulo agudo
// = 90 -> ángulo recto
// < 180 -> ángulo obtuso
// ángulo llano

function determinarTipoAngulo(grados) {
    if (typeof grados === 'number') {
        if (grados < 90) {
            return 'Ángulo agudo';
        } else if (grados == 90) {
            return 'Ángulo recto';
        } else if (grados < 180) {
            return 'Ángulo obtuso';
        } else {
            return 'Ángulo llano';
        }
    } else {
        throw TypeError('El argumento debe ser un número.');
    }
}

try {
    console.log(determinarTipoAngulo(45)); // 'Ángulo agudo'
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(determinarTipoAngulo(90)); // 'Ángulo recto'
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(determinarTipoAngulo(115)); // 'Ángulo obtuso'
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(determinarTipoAngulo(225)); // 'Ángulo llano'
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(determinarTipoAngulo('90')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
