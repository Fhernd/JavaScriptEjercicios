// Ejercicio 61: Uso del operador de igualdad estricta.

// ===

// ==

if (5 === 5){
    console.log('5 es igual (estrictamente) a 5');
}

if (5 === '5'){
    console.log(`5 es igual (estrictamente) a '5'`);
}

if ('JS' === 'JS'){
    console.log(`'JS' es igual (estrictamente) a 'JS'`);
}

if ('JS' === 'JavaScript'){
    console.log(`'JS' es igual (estrictamente) a 'JavaScript'`);
}

if (true === true){
    console.log(`true es igual (estrictamente) a true`);
}

if (true === 1){
    console.log(`true es igual (estrictamente) a 1`);
}

if (false === 0){
    console.log(`false es igual (estrictamente) a 0`);
}

let objeto1 = {};
let objeto2 = {};

if (objeto1 === objeto2){
    console.log(`objeto1 es igual (estrictamente) a objeto2`);
}

let objeto3 = objeto1;

if (objeto1 === objeto3){
    console.log(`objeto1 es igual (estrictamente) a objeto3`);
}

if (objeto1 === {}){
    console.log(`objeto1 es igual (estrictamente) a {}`);
}

let arreglo1 = [];
let arreglo2 = [];

if (arreglo1 === arreglo2){
    console.log(`arreglo1 es igual (estrictamente) a arreglo2`);
}
