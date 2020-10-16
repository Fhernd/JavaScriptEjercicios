// Ejercicio 886: Iterar sobre todas las propiedades de un objeto y ejecutar una operación por cada una.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]';
}

function iterarPropiedadesObjeto(objeto, callback) {
    if (!esObjetoEstandar(objeto)) {
        throw TypeError('El primer argumento debe ser un objeto.');
    }

    if (typeof callback != 'function') {
        throw TypeError('El segundo argumento debe ser una función.');
    }

    Object.keys(objeto).forEach(p => callback(p, objeto[p]));
}

let persona = {
    id: 1001,
    nombre: 'Daniela',
    email: 'danny@mail.co'
}

try {
    iterarPropiedadesObjeto(persona, console.log);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    iterarPropiedadesObjeto(100, console.log);  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    iterarPropiedadesObjeto(persona, true);  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
