// Ejercicio 740: Comprobar que dos arreglos de igual longitud contengan los mismos elementos.

function arreglosSimilares(arreglo1, arreglo2) {
    if (arreglo1 instanceof Array && arreglo2 instanceof Array) {
        if (arreglo1.length === arreglo2.length) {
            for(let i = 0; i < arreglo1.length; ++i) {
                if (arreglo1[i] !== arreglo2[i]) {
                    return false;
                }
            }

            return true;
        } else {
            throw Error('Ambos arreglos deben tener la misma longitud.');
        }
    } else {
        throw TypeError('Los dos argumentos deben ser arreglos.');
    }
}

try {
    console.log(arreglosSimilares([1, 2, 3], [1, 2, 3]));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(arreglosSimilares([1, 2, 3], [1, 2, 4]));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(arreglosSimilares([1, 2, 4], [1, 2, 3]));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(arreglosSimilares("[1, 2, 3]", [1, 2, 3]));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(arreglosSimilares([1, 2, 3], "[1, 2, 3]"));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(arreglosSimilares([1, 2, 3], [1, 2, 3, 4]));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(arreglosSimilares(['JS', 'PHP', 'C++'], ['JS', 'PHP', 'C++']));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(arreglosSimilares(['JS', 'PHP', 'C++'], ['js', 'PHP', 'C++']));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}
