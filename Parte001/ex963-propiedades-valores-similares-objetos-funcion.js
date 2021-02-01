// Ejercicio 963: Definir una función para validar si dos objetos son similares.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]';
}

function objetosSimilares(fuente, destino) {
    if (!esObjetoEstandar(fuente)) {
        throw TypeError('El primer argumento debe ser un objeto.');
    }
    
    if (!esObjetoEstandar(destino)) {
        throw TypeError('El segundo argumento debe ser un objeto.');
    }

    return Object.keys(destino).every(k => {
        return fuente.hasOwnProperty(k) && fuente[k] === destino[k];
    });
}

try {
    console.log(objetosSimilares({id: 1000, marca: 'MSi', cpu: 'Intel Core i7'}, {marca: 'MSi', cpu: 'Intel Core i7'}));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(objetosSimilares({id: 1000, marca: 'MSi', cpu: 'Intel Core i7'}, {marca: 'MSi', ram: 128}));    // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(objetosSimilares(1000, {marca: 'MSi', ram: 128}));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(objetosSimilares({id: 1000, marca: 'MSi', cpu: 'Intel Core i7'}, 'ABC'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
