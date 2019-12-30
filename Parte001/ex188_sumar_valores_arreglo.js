// Ejercicio 188: Sumar todos los valores numéricos de un arreglo con la función reduce.

let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduce((anterior, actual) => {
    return anterior + actual;
});

console.log(numeros);
console.log(suma);
