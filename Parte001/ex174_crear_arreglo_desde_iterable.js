// Ejercicio 174: Crear un arreglo a partir de un objeto iterable con Array.from.

function crearArreglo(){
    return Array.from(arguments);
}

let arreglo = crearArreglo(1, 2, 3);

console.log(arreglo);
console.log(arreglo instanceof Array);
