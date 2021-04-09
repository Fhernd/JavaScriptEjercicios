// Ejercicio 1030: Definir una función para obtener los elementos que diferencian dos arreglos.

// A = [1, 2, 3];
// B = [2, 3, 4];
// C = {1, 4}

Set.prototype.diferencia = function(otroConjunto) {
    let resultado = new Set();

    for(const e of this) {
        if (!otroConjunto.has(e)) {
            resultado.add(e);
        }
    }

    return resultado;
}

function diferenciaConjuntos(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        throw TypeError('Ambos argumentos deben ser arreglos.');
    }

    let diferenciaAB = new Set(a).diferencia(new Set(b));
    let diferenciaBA = new Set(b).diferencia(new Set(a));

    return [...Array.from(diferenciaAB), ...Array.from(diferenciaBA)];
}

try {
    console.log(diferenciaConjuntos([1, 2, 3], [2, 3, 4])); // [1, 4]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(diferenciaConjuntos({a: 42}, [2, 3, 4])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
