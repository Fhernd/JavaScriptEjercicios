// Ejercicio 903: Intercambiar el valor de dos variables usando la des-estructuración de arreglos.

let x = 2;
let y = 3;

console.log('x =', x);
console.log('y =', y);

console.log();

// Solución 1 (sin des-estructuración de arreglos):
let temporal = x;
x = y;
y = temporal;

console.log('x =', x);
console.log('y =', y);

console.log();

x = 2;
y = 3;
console.log('x =', x);
console.log('y =', y);

console.log();

// Solución 2 (con des-estructuración de arreglos):
[x, y] = [y, x]
console.log('x =', x);
console.log('y =', y);
