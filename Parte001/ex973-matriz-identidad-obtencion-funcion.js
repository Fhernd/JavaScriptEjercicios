// Ejercicio 973: Definir una función para generar una matriz identidad de tamaño n.

// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1

function crearMatrizIdentidad(n) {
    if (typeof n != 'number') {
        throw TypeError('El argumento debe ser un número.');
    }
    
    if (!Number.isInteger(n)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    if (n <= 0) {
        throw Error('El argumento debe ser un número entero positivo.');
    }

    let matrizIdentidad = [];

    for(let i = 0; i < n; ++i) {
        let fila = [];
        
        for(let j = 0; j < n; ++j) {
            if (i == j) {
                fila.push(1);
            } else {
                fila.push(0);
            }
        }

        matrizIdentidad.push(fila);
    }

    return matrizIdentidad;
}

try {
    let resultado = crearMatrizIdentidad(4);

    console.log(resultado);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    let resultado = crearMatrizIdentidad(10);

    console.log(resultado);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    let resultado = crearMatrizIdentidad('John');   // Error

    console.log(resultado);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    let resultado = crearMatrizIdentidad(1.4142);   // Error

    console.log(resultado);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    let resultado = crearMatrizIdentidad(-10);   // Error

    console.log(resultado);
} catch (e) {
    console.log(`Error: ${e.message}`);
}
