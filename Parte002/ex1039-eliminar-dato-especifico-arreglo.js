// Ejercicio 1039: Eliminar un dato específico de un arreglo usando las funciones indexOf() y splice().

let primos = [2, 3, 5, 7];

let primo = 5;

// => [2, 3, 7]

console.log(primos);    // [2, 3, 5, 7]
console.log(primos.length); // 4

console.log();

let indice = primos.indexOf(primo);

if (indice >= 0) {
    primos.splice(indice, 1);
}

console.log(primos);    // [2, 3, 7]
console.log(primos.length); // 3
