// Ejercicio 1178: Obtener la parte entera de una raíz cuadrada real.

// Math.sqrt(2) = 1.42...
// => 1

function raizRealEntera(numero) {
    return parseInt(String(Math.sqrt(numero)));
}

console.log(raizRealEntera(2)); // 1
console.log(raizRealEntera(4)); // 2
console.log(raizRealEntera(3)); // 1
console.log(raizRealEntera(17)); // 4
