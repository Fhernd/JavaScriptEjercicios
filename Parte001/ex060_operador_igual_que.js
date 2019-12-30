// Ejercicio 60: Uso del operador igual que.

// ==

if (7 == 7){
    console.log('7 es igual a 7.');
}

if (7 == 9){
    console.log('7 es igual a 9.');
}

if ('JS' == 'JS'){
    console.log("'JS' es igual a 'JS'");
}

if ('JS' == 'JavaScript'){
    console.log("'JS' es igual a 'JavaScript'");
}

if ('7' == 7){
    console.log("'7' es igual a 7");
}

if (true == true){
    console.log('true es igual a true.');
}

if (false == false){
    console.log('false es igual a false.');
}

if (true == 1){
    console.log('true es igual a 1.');
}

if (false == 0){
    console.log('false es igual a 0.');
}

let objeto = {};

if (objeto == objeto){
    console.log('objeto es igual a objeto.');
}

let otroObjeto = {};

if (objeto == otroObjeto){
    console.log('objeto es igual a otroObjeto.');
}

let arreglo = [];

if (arreglo == []){
    console.log('arreglo es igual a [].');
}
