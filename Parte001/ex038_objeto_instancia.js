// Ejercicio 38: Determinar a qué tipo de dato pertenece un objeto.

let fecha = new Date();
let error = new Error();
let cadena = new String();
let objeto = new Object();

console.log(typeof fecha);
console.log(typeof error);
console.log(typeof cadena);
console.log(typeof objeto);

if (fecha instanceof Date){
    console.log('La variable `fecha` es de tipo Date.');
} else if (fecha instanceof Error){
    console.log('La variable `fecha` es de tipo Error.');
} else if (fecha instanceof cadena){
    console.log('La variable `fecha` es de tipo String.');
} else {
    console.log('No se pudo determinar el tipo de dato de la variable `fecha`.');
}

if (error instanceof Date){
    console.log('La variable `error` es de tipo Date.');
} else if (error instanceof Error){
    console.log('La variable `error` es de tipo Error.');
} else if (error instanceof cadena){
    console.log('La variable `error` es de tipo String.');
} else {
    console.log('No se pudo determinar el tipo de dato de la variable `error`.');
}

if (cadena instanceof Date){
    console.log('La variable `cadena` es de tipo Date.');
} else if (cadena instanceof Error){
    console.log('La variable `cadena` es de tipo Error.');
} else if (cadena instanceof String){
    console.log('La variable `cadena` es de tipo String.');
} else {
    console.log('No se pudo determinar el tipo de dato de la variable `cadena`.');
}

if (objeto instanceof Date){
    console.log('La variable `objeto` es de tipo Date.');
} else if (objeto instanceof Error){
    console.log('La variable `objeto` es de tipo Error.');
} else if (objeto instanceof String){
    console.log('La variable `objeto` es de tipo String.');
} else {
    console.log('No se pudo determinar el tipo de dato de la variable `objeto`.');
}
