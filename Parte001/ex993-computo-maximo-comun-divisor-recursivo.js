// Ejercicio 993: Definir una función recursiva para calcular el máximo común divisor (MCD).

// 18 => 1, 2, 3, 6, 9, 18
// 24 => 1, 2, 3, 4, 6, 8, 12, 24
// MCD(18, 24) = 6

function mcd(x, y) {
    if (!y) {
        return x;
    } else {
        return mcd(y, x % y);
    }
}

console.log(mcd(18, 24));   // 6
