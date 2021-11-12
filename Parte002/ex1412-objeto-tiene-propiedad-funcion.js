// Ejercicio 1412: Comprobar si un objeto tiene una propiedad específica con una función.

function esObjetoPlano(dato) {
    return Object.prototype.toString.call(dato) === '[object Object]';
}

function objetoTienePropiedad(objeto, propiedad) {
    return objeto != null && esObjetoPlano(objeto) && hasOwnProperty.call(objeto, propiedad);
}

let computador = {
    id: 1001,
    marca: 'MSi',
    cpu: 'Intel'
}

console.log(objetoTienePropiedad(computador, 'id'));    // true
console.log(objetoTienePropiedad(computador, 'marca'));    // true
console.log(objetoTienePropiedad(computador, 'cpu'));    // true

console.log();

console.log(objetoTienePropiedad(computador, 'ram'));       // false
console.log(objetoTienePropiedad(computador, 'gpu'));       // false
