// Ejercicio 35: Validar si una variable es de tipo Date.

let x = new Date();
let y = 'JavaScript';
let z = 2.71;

if (x instanceof Date){
    console.log('La variable `x` es de tipo Date.');
} else {
    console.log('La variable `x` no es de tipo Date.');
}

if (y instanceof Date){
    console.log('La variable `y` es de tipo Date.');
} else {
    console.log('La variable `y` no es de tipo Date.');
}

if (z instanceof Date){
    console.log('La variable `z` es de tipo Date.');
} else {
    console.log('La variable `z` no es de tipo Date.');
}
