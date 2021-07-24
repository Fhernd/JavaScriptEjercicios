// Ejercicio 1194: Usar una función lambda para obtener los números primos desde 2 hasta N.

const obtenerPrimos = (maximo) => {
    let numeros = Array.from({length: maximo - 1}).map((d, i) => i + 2);
    let raizCuadrada = Math.sqrt(maximo);
    let auxiliar = Array.from({length: raizCuadrada - 1}).map((d, i) => i + 2);

    auxiliar.forEach(d => (numeros = numeros.filter(e => e % d !== 0 || e === d)));

    return numeros;
}

console.log(obtenerPrimos(15)); // [2, 3, 5, 7, 11, 13]
console.log(obtenerPrimos(5)); // [2, 3, 5]
console.log(obtenerPrimos(100)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, ...]
console.log(obtenerPrimos(100).length); // 25
