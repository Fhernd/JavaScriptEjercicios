// Ejercicio 68: Uso del operador lógico de negación para alterar el valor de verdad.

// !

// !true := false; !false := true

console.log(!true);
console.log(!false);
console.log(!1);
console.log(!0);
console.log(!!true);

console.log();

// DeMorgan:

// !(a && b) := !a || !b

// !(a || b) := !a && !b

let a = true;
let b = false;

console.log(!(a && b));
console.log(!(a || b));

console.log(!a || !b);
console.log(!a && !b);
