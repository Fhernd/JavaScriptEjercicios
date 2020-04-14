// Ejercicio 633: Demostrar el uso de nombres de propiedades computadas en un objeto.

function fn () {
    return 1;
}

let objeto = {a: 'contenido', b: 10, ['c' + fn()]: 'propiedad computada'};

console.log(objeto);
