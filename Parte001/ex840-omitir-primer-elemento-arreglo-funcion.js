// Ejercicio 840: Definir una función para omitir el primer elemento de un arreglo.

function omitirPrimerElemento(datos) {
    if(!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    return datos.length == 1 ? datos : datos.slice(1);
}

try {
    console.log(omitirPrimerElemento([1, 2, 3, 4, 5])); // [2, 3, 4, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(omitirPrimerElemento(['Perl', 'Python', 'JavaScript', 'C++'])); // ['Python', 'JavaScript', 'C++']
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(omitirPrimerElemento(['Perl'])); // ['Perl']
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(omitirPrimerElemento(new WeakMap())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
