// Ejercicio 675: Crear una función para validar si tres (3) números se hallan en un rango específico.

function enRango(a, b, c) {
    return (a >= 1 && a <= 100) && (b >= 1 && b <= 100) && (c >= 1 && c <= 100);
}

console.log(enRango(1, 2, -3)); // false
console.log(enRango(-1, 2, 3)); // false
console.log(enRango(1, 2, 3)); // true
console.log(enRango(1, 200, 3)); // false
