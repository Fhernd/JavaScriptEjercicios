// Ejercicio 17: Determinar si una variable ha sido declarada con la función typeof.

let a;
let b = 11;

console.log(typeof a);
console.log(typeof b);

console.log()

if (typeof a === 'undefined'){
    console.log('La variable `a` no tiene asignado un valor.');
} else {
    console.log('La variable `a` tiene asignado un valor.');
}

console.log()

if (typeof b === 'undefined'){
    console.log('La variable `b` no tiene asignado un valor.');
} else {
    console.log('La variable `b` tiene asignado un valor.');
}
