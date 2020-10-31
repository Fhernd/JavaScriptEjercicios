// Ejercicio 898: Tomar el resto de elementos de un arreglo durante su de-construcción.

function obtenerDatos() {
    return [10, 20, 30, 40, 50];
}

let resultado = obtenerDatos();
console.log(resultado);

console.log();

let [a, b, ...otrosNumeros] = obtenerDatos();

console.log(a, b, otrosNumeros);
console.log(Array.isArray(otrosNumeros));

console.log(typeof a);  // number
console.log(typeof b);  // number
