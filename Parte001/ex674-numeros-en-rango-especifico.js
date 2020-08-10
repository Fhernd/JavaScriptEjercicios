// Ejercicio 674: Crear una función para comprobar is uno u otro número se hallan en un rango específico.

function enRango(a, b) {
    return (a >= 1 && a <= 100) || (b >= 101 && b <= 200);
}

console.log(enRango(-5, -10));  // false
console.log(enRango(0, 300));  // false
console.log(enRango(10, -10));  // true
console.log(enRango(-10, 110));  // true
console.log(enRango(100, 110));  // true
