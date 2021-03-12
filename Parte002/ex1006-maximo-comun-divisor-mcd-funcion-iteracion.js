// Ejercicio 1006: Definir una función para calcular el máximo común divisor (MCD) usando un ciclo while.

function mcd(a, b) {
    while (a != b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }

    return a;
}

console.log(mcd(2, 3)); // 1
console.log(mcd(7, 14));    // 7
console.log(mcd(110, 75));    // 5
