// Ejercicio 63: Uso del operador estrictamente diferente de.

// !==, !=

// true != 1 := false
// true !== 1 := true

if (true !== 1){
    console.log(`true es (estricamente) diferente de 1`);
}

if (true != 1){
    console.log(`true es diferente de 1`);
}

if (false !== 0){
    console.log(`false es (estricamente) diferente de 0`);
}

if (3 != '3'){
    console.log(`3 es diferente de '3'`);
} else {
    console.log(`3 es igual a '3'`);
}

if (3 !== '3'){
    console.log(`3 es diferente de '3'`);
} else {
    console.log(`3 es igual a '3'`);
}

let objeto1 = {};
let objeto2 = {};

if (objeto1 !== objeto2){
    console.log(`objeto1 es (estricamente) diferente de objeto2`);
}

if (objeto1 !== {}){
    console.log(`objeto1 es (estricamente) diferente de {}`);
}
