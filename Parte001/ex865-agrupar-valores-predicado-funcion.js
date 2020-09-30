// Ejercicio 865: Crear una función para agrupar elementos según un predicado específico.

// ['Búho', 'Búfalo', 'Boa', 'Águila', 'Cástor', 'Ardilla', 'Ratón', 'Perro']
// [['Búho', 'Búfalo', 'Boa'], ['Águila', 'Cástor', 'Ardilla', 'Ratón', 'Perro']]

function agruparElementos(datos, predicado) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    if (!datos.every(d => typeof d == 'string')) {
        throw TypeError('Todos los elementos del arreglo «datos» deben ser cadenas de caracteres.');
    }

    if (!datos.every(d => d.length)) {
        throw Error('Todos las cadenas de caracteres del arreglo «datos» deben tener al menos un carácter.');
    }

    if (typeof predicado != 'function') {
        throw TypeError('El argumento «predicado» debe ser una función.');
    }

    return datos.reduce((a, v, i) => (a[predicado(v, i) ? 0 : 1].push(v), a), [[], []]);
}

try {
    console.log(agruparElementos(['Búho', 'Búfalo', 'Boa', 'Águila', 'Cástor', 'Ardilla', 'Ratón', 'Perro'], (v) => v[0] === 'B'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agruparElementos(['Búho', 'Búfalo', 'Boa', 100, 'Cástor', 'Ardilla', 'Ratón', 'Perro'], (v) => v[0] === 'B'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agruparElementos({a: 1}, (v) => v[0] === 'B')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agruparElementos(['Búho', 'Búfalo', '', 'Águila', 'Cástor', 'Ardilla', 'Ratón', 'Perro'], (v) => v[0] === 'B'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}
