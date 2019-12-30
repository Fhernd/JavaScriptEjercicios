// Ejercicio 189: Sumar todos los elementos numéricos de un arreglo con reduceRight().

let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduceRight((anterior, actual) => {
    return anterior + actual;
});

console.log(numeros);
console.log(suma);
