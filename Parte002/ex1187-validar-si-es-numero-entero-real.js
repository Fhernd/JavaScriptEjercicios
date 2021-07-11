// Ejercicio 1187: Con una función validar si un valor numérico dado es entero o real.

function esEntero(numero) {
    let resultado = (numero - Math.floor(numero));

    return resultado === 0;
}

console.log(esEntero(11));  // true
console.log(esEntero(13));  // true
console.log(esEntero(-13));  // true
console.log(esEntero(1));  // true

console.log();

console.log(esEntero(1.1));  // false
console.log(esEntero(-1.1));  // false
console.log(esEntero(-13.7));  // false
