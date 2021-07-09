// Ejercicio 1180: Crear una función personalizada para determinar el menor de tres números.

function menorTresNumeros(numero1, numero2, numero3) {
    if (typeof numero1 != 'number' || typeof numero2 != 'number' || typeof numero3 != 'number') {
        return null;
    }

    return Math.min(numero1, numero2, numero3);
}

console.log(menorTresNumeros(13, 11, 17));  // 11
console.log(menorTresNumeros(13, 11, 5));  // 5
console.log(menorTresNumeros(-13, -11, -5));  // -13

console.log();

console.log(menorTresNumeros(13, '11', 5));  // null
