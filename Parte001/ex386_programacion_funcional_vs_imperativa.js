// Ejercicio 386: Comparar la programación imperativa versus la programación funcional.

let numeros = [2, 3, 5, 7, 11, 13];

// Programación imperativa:
let suma = 0;
for(let i = 0; i < numeros.length; ++i){
    suma += numeros[i];
}
console.log(suma);

console.log();

// Programación funcional:
suma = numeros.reduce((a, b) => a + b);
console.log(suma);
