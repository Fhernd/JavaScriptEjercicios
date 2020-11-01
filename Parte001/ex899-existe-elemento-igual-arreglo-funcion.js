// Ejercicio 899: Crear una función para comprobar si no existe un elemento igual a un valor.

function ninguno(numeros, funcion=Boolean) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento «numeros» debe ser un arreglo.');
    }

    if (!numeros.every(e => typeof e === 'number')) {
        throw TypeError('Los elementos del argumento «numeros» deben ser de tipo numérico.');
    }

    return !numeros.some(funcion);
}

try {
    console.log(ninguno([3, 5, 11, 7, 13], x => x == 2));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ninguno([3, 5, 11, 7, 13], x => x == 3));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ninguno({a: 1}, x => x == 3));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ninguno([3, 5, 11, '-1', 7, 13], x => x == 3));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
