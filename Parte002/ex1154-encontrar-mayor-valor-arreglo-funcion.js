// Ejercicio 1154: Encontrar el número mayor en un arreglo con la función max() del objeto Math.

function maximo(numeros) {
    if (toString.call(numeros) !== '[object Array]') {
        return null;
    }

    if (!numeros.every(e => typeof e == 'number')) {
        return null;
    }

    return Math.max.apply(null, numeros);
}

console.log(maximo([7, 3, 11, 13, 5, 2, 19]));  // 19
console.log(maximo([7, 3, 11, 13, 5, 2, 19, 29, 23]));  // 29

console.log();

console.log(maximo(42));    // null
console.log(maximo([7, 3, 11, 13, '5', 2, 19]));  // null
