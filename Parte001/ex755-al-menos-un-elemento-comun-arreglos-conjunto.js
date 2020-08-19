// Ejercicio 755: Usar un objeto Set para comprobar si dos arreglos tienen al menos un elemento en común.

// Set -> Conjuntos

Set.prototype.interseccion = function(otroConjunto) {
    let conjuntoInterseccion = new Set();

    for(const e of otroConjunto) {
        if (this.has(e)) {
            conjuntoInterseccion.add(e);
        }
    }

    return conjuntoInterseccion;
}

function elementosEnComun(arreglo1, arreglo2) {
    if (arreglo1 instanceof Array && arreglo2 instanceof Array) {
        if (arreglo1.length && arreglo2.length) {
            let conjunto1 = new Set(arreglo1);
            let conjunto2 = new Set(arreglo2);

            return conjunto1.interseccion(conjunto2).size > 0;
        } else {
            throw Error('Ambos arreglos deben tener al menos un elemento.');
        }
    } else {
        throw TypeError('Ambos argumentos deben ser arreglos.');
    }
}

try {
    console.log(elementosEnComun([2, 3, 5, 7], [1, 3, 9, 11])); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementosEnComun([2, 3, 5, 7], [1, 13, 9, 11])); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementosEnComun(100, [1, 13, 9, 11])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementosEnComun([2, 3, 5, 7], 100)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementosEnComun([2, 3, 5, 7], [])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
