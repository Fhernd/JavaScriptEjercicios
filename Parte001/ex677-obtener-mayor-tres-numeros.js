// Ejercicio 677: Crear una función personalizada para obtener el mayor de tres (3) números.

function obtenerNumeroMayor(a, b, c) {
    let mayor = 0;

    if (a > b) {
        mayor = a;
    } else {
        mayor = b;
    }

    if (c > mayor) {
        mayor = c;
    }

    return mayor;
}

console.log(obtenerNumeroMayor(1, 3, 2));   // 3
console.log(obtenerNumeroMayor(4, 3, 2));   // 4
console.log(obtenerNumeroMayor(8, 9, 10));   // 10
