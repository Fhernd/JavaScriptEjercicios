// Ejercicio 680: Crear una función para comprobar si dos números se hallan en el ranngo 1 a 100.

function enRango1A100(a, b) {
    return (a >= 1 && a <= 100) && (b >= 1 && b <= 100);
}

console.log(enRango1A100(-1, 100)); // false
console.log(enRango1A100(100, -1)); // false
console.log(enRango1A100(100, 50)); // true
