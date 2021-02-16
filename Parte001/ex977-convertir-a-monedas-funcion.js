// Ejercicio 977: Definir una función para convertir una cantidad de dinero en monedas.

// [25, 10, 5, 2, 1]

// 55 => 25, 25, 5
// 47 => 25, 10, 10, 2

function convertirAMonedas(cantidad, monedas) {
    if (typeof cantidad != 'number') {
        throw TypeError('El argumento cantidad debe ser un número.');
    }

    if (!Number.isInteger(cantidad)) {
        throw TypeError('El argumento cantidad debe ser un número entero.');
    }

    if (cantidad < 0) {
        throw Error('El argumento cantidad debe ser un número entero positivo.');
    }

    if (!Array.isArray(monedas)) {
        throw TypeError('El argumento monedas debe ser un arreglo.');
    }

    if (!monedas.every(m => typeof m == 'number' && Number.isInteger(m) && m > 0)) {
        throw TypeError('Todos los elementos del arreglo monedas deben ser números enteros positivos.');
    }

    if (cantidad == 0) {
        return [];
    } else {
        if (cantidad >= monedas[0]) {
            let temporal = (cantidad - monedas[0]);

            return [monedas[0]].concat(convertirAMonedas(temporal, monedas));
        } else {
            monedas.shift();
            return convertirAMonedas(cantidad, monedas);
        }
    }
}

try {
    console.log(convertirAMonedas(55, [25, 10, 5, 2, 1]));  // [25, 25, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirAMonedas(47, [25, 10, 5, 2, 1]));  // [25, 10, 10, 2]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirAMonedas(47.5, [25, 10, 5, 2, 1]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirAMonedas(-47, [25, 10, 5, 2, 1]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirAMonedas({a: 1}, [25, 10, 5, 2, 1]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirAMonedas(47, [25, 10, 5, 2, "uno"]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirAMonedas(47, [25, 10, 5, 2, -1]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirAMonedas(47, new Map()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
