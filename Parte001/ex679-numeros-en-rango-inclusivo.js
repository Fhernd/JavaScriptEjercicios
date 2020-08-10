// Ejercicio 679: Determinar si dos números se hallan en uno de dos rangos específicos.

function numerosEnRango(a, b) {
    return ((a >= 1 && a <= 20) && (b >= 1 && b <= 20)) || ((a >= 30 && a <= 50) && (b >= 30 && b <= 50));
}

console.log(numerosEnRango(-1, 20)); // false
console.log(numerosEnRango(20, -1)); // false
console.log(numerosEnRango(20, 20)); // true
console.log(numerosEnRango(35, 65)); // false
console.log(numerosEnRango(70, 40)); // false
console.log(numerosEnRango(35, 45)); // true
