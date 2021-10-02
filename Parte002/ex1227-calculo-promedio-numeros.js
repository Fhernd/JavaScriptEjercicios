// Ejercicio 1227: Calcular el promedio de varios números usando la función reduce().

let numeros = [2, 3, 5, 7, 11, 13, 17];

let suma = numeros.reduce((a, n) => (a += n, a), 0);
console.log(suma);

console.log();

let promedio = suma / numeros.length;
console.log(promedio);  // ~8.28
