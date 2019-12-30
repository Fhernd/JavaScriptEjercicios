// Ejercicio 30: Averiguar si una variable definida es de tipo de dato numérico.

let x = 5.3;
let y = Number('1.23');
let z = '';
let w = new Date();

if (typeof x === 'number'){
    console.log('La variable `x` es numérica.');
} else {
    console.log('La variable `x` no es numérica.');
}

if (typeof y === 'number'){
    console.log('La variable `y` es numérica.');
} else {
    console.log('La variable `y` no es numérica.');
}

if (typeof z === 'number'){
    console.log('La variable `z` es numérica.');
} else {
    console.log('La variable `z` no es numérica.');
}

if (typeof w === 'number'){
    console.log('La variable `w` es numérica.');
} else {
    console.log('La variable `w` no es numérica.');
}
