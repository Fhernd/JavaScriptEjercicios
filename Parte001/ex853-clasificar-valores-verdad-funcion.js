// Ejercicio 853: Crear una función para clasificar valores de verdad en un arreglo.

// Valores de verdad: true, false (verdadero, falso)

// false: null, undefined, 0, '', "", ``, !true
// true: todos los demás valores son equivalentes a true, 

function clasificarValoresVerdad(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    return datos.reduce((a, v, i) => (a[v ? 1 : 0].push(v), a), [[], []]);
}

try {
    console.log(clasificarValoresVerdad([null, 5, 7, undefined, {a: 1}, 0, '', [1, 2, 3], "", ``, !true, 1]));

    // [[null, undefined, 0, '', "", ``, !true], [5, 7, {a: 1}, [1, 2, 3], 1]]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(clasificarValoresVerdad(100));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
