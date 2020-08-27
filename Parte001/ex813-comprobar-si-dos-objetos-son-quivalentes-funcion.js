// Ejercicio 813: Definir una función para comprobar si dos objetos son equivalentes.

// objeto1: {a: 1, b: 2}
// objeto2: {a: 1, b: 2}
// objeto3: {a: 1, b: 3}

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]';
}

function sonObjetosEquivalentes(objeto1, objeto2) {
    if (!esObjetoEstandar(objeto1) || !esObjetoEstandar(objeto2)) {
        throw TypeError('Ambos argumentos deben ser arreglos.');
    }

    return Object.keys(objeto1).every(p => objeto2.hasOwnProperty(p) && objeto1[p] === objeto2[p]);
}

try {
    console.log(sonObjetosEquivalentes({a: 1, b: 2}, {a: 1, b: 2})); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sonObjetosEquivalentes({a: 1, b: 2}, {a: 1, b: 3})); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sonObjetosEquivalentes({a: 1, b: 2, c: 3}, {a: 1, b: 2})); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sonObjetosEquivalentes(new Array(), {a: 1, b: 2})); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sonObjetosEquivalentes({a: 1, b: 2}, new Map())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
