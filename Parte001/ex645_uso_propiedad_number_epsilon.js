// Ejercicio 645: Usar la propiedad Number.EPSILON para comprobar suma de números reales.

let a = 0.1;
let b = 0.2;

console.log('Contenido de la variable `a`:', a);
console.log('Contenido de la variable `b`:', b);

console.log();

let suma = a + b; // Resultado esperado: 0.3

console.log('Contenido de la variable `suma`:', suma);

console.log(suma === 0.3);

console.log(Math.abs(a + b - 0.3) < Number.EPSILON);

console.log();

console.log(Number.EPSILON);
