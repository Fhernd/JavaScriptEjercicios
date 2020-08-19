// Ejercicio 756: Crear una función para obtener el conjunto unión de dos arreglos.

// A = [2, 3, 5, 7, 9]
// B = [5, 2, 9, 11, 13]
// C = [2, 3, 5, 7, 9, 11, 13]

Set.prototype.union = function(otroConjunto) {
    let conjuntoUnion = new Set();

    for(const e of this) {
        conjuntoUnion.add(e);
    }

    for (const e of otroConjunto) {
        if (!conjuntoUnion.has(e)) {
            conjuntoUnion.add(e);
        }
    }

    return conjuntoUnion;
}

function unionArreglos(arreglo1, arreglo2) {
    if (arreglo1 instanceof Array && arreglo2 instanceof Array) {
        let conjunto1 = new Set(arreglo1);
        let conjunto2 = new Set(arreglo2);

        let conjunto3 = conjunto1.union(conjunto2);

        return [...conjunto3];
    } else {
        throw TypeError('Ambos argumentos deben ser arreglos.');
    }
}

try {
    console.log(unionArreglos([2, 3, 5, 7, 9], [5, 2, 9, 11, 13])); // [2, 3, 5, 7, 9, 11, 13]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(unionArreglos(1000, [5, 2, 9, 11, 13])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(unionArreglos([2, 3, 5, 7, 9], 2000)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
