// Ejercicio 812: Validar si un objeto tiene las mismas propiedades que otro objeto.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]';
}

function propiedadesIguales(primerObjeto, segundoObjeto) {
    if (!esObjetoEstandar(primerObjeto) || !esObjetoEstandar(segundoObjeto)) {
        throw TypeError('Ambos argumentos deben ser objetos.');
    }

    return Object.keys(primerObjeto).every(p => segundoObjeto.hasOwnProperty(p));
}

try {
    console.log(propiedadesIguales({a: 1, b: 2}, {a: 100, b: 200}));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(propiedadesIguales({a: 1, b: 2, c: 3}, {a: 100, b: 200}));    // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(propiedadesIguales({a: 1, b: 2}, {a: 100, b: 200, c: 300}));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(propiedadesIguales([1, 2, 3], {a: 100, b: 200, c: 300}));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(propiedadesIguales({a: 100, b: 200, c: 300}, new Map()));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
