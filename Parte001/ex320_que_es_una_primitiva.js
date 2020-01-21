// Ejercicio 320: Estudiar el concepto tipo de dato primitivo.

// string, number, boolean, null, undefined

let nombre = 'Edward';
let precio = 299.99;
let llueve = false;
let valor = null;
let noDisponible = undefined;

console.log(nombre.length);
console.log(precio.toString());
console.log(llueve.valueOf());

let nombre2 = String('Edward');
let precio2 = Number('299.99');
let llueve2 = Boolean('false');

if (nombre === nombre2){
    console.log('Son iguales los contenidos de las variables `nombre` y `nombre2`');
} else {
    console.log('No son iguales los contenidos de las variables `nombre` y `nombre2`');
}

let nombre3 = new String('Edward');

if (nombre === nombre3){
    console.log('Son iguales los contenidos de las variables `nombre` y `nombre3`');
} else {
    console.log('No son iguales los contenidos de las variables `nombre` y `nombre3`');
}

console.log()

console.log('Edward'.length);
