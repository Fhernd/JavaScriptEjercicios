// Ejercicio 62: Uso del operador diferente de.

// !=

// 5 != 3 := true, 5 != 5 := false

if (5 != 3){
    console.log('5 es diferente de 3');
}

if (5 != 5){
    console.log('5 es diferente de 5');
}

if ('JS' != 'JavaScript'){
    console.log(`JS es distinto de 'JavaScript'`);
}

if ('JS' != 'JS'){
    console.log(`JS es distinto de 'JS'`);
}

if (true != false){
    console.log(`true es distinto de false`);
}

if (true != true){
    console.log(`true es distinto de true`);
}

if (true != 1){
    console.log(`true es distinto de 1`);
} else {
    console.log(`true es igual a 1`);
}

let objeto1 = {};
let objeto2 = {};

if (objeto1 != objeto2){
    console.log(`objeto1 es distinto de objeto2`);
}

if (objeto1 != {}){
    console.log(`objeto1 es distinto de {}`);
}

let arreglo1 = [];
let arreglo2 = [];

if (arreglo1 != arreglo2){
    console.log(`arreglo1 es distinto de arreglo2`);
}
