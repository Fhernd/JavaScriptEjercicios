// Ejercicio 27: Averiguar si una variable es de tipo de String.

let a = String('JavaScript es tremendo!');
let b = 'ES6';
let c = new Date();
let d = 5;

if (typeof a === 'string'){
    console.log('La variable `a` es una cadena de caracteres.');
} else {
    console.log('La variable `a` no es una cadena de caracteres.');
}

if (typeof b === 'string'){
    console.log('La variable `b` es una cadena de caracteres.');
} else {
    console.log('La variable `b` no es una cadena de caracteres.');
}

if (typeof c === 'string'){
    console.log('La variable `c` es una cadena de caracteres.');
} else {
    console.log('La variable `c` no es una cadena de caracteres.');
}

if (typeof d === 'string'){
    console.log('La variable `d` es una cadena de caracteres.');
} else {
    console.log('La variable `d` no es una cadena de caracteres.');
}
