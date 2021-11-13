// Ejercicio 1419: Comprobar si un dato específico es un objeto JSON puro.

function esObjetoJsonPuro(dato) {
    return toString.call(dato) === '[object Object]';
}

let persona = {
    id: 1002,
    nombre: 'Juan',
    email: 'juan@mail.co'
}

console.log(esObjetoJsonPuro(persona)); // true
console.log(esObjetoJsonPuro(new Array())); // false
console.log(esObjetoJsonPuro(new Map())); // false
console.log(esObjetoJsonPuro(new Set())); // false
