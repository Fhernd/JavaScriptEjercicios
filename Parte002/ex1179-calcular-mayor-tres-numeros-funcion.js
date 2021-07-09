// Ejercicio 1179: Crear una función personalizada para determinar el mayor de tres números.

function mayorTresNumeros(numero1, numero2, numero3) {
    if (typeof numero1 != 'number' || typeof numero2 != 'number' || typeof numero3 != 'number') {
        return null;
    }

    return Math.max(numero1, numero2, numero3);
}

console.log(mayorTresNumeros(17, 11, 13));  // 17
console.log(mayorTresNumeros(17, 29, 13));  // 29
console.log(mayorTresNumeros(-17, -29, -13));  // -13

console.log();

console.log(mayorTresNumeros('a', 13, 17)); //   null
