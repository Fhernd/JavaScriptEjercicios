// Ejercicio 1155: Encontrar el número menor en un arreglo con la función min() del objeto Math.

function minimo(numeros) {
    if (toString.call(numeros) != '[object Array]') {
        return null;
    }

    if (!numeros.every(e => typeof e == 'number')) {
        return null;
    }

    return Math.min.apply(null, numeros);
}

console.log(minimo([3, 5, 7, 2, 11, 29, 13]));  // 2
console.log(minimo([3, 5, 7, 31, 11, 29, 41]));  // 3

console.log();

console.log(minimo(42));    // null
console.log(minimo([3, 5, 7, '31', 11, 29, 41]));  // null
