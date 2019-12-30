// Ejercicio 19: Validar si una variable es undefined o null.

let numero = undefined;

if (numero === undefined){
    console.log('(1) La variable `numero` es undefined.')
}

if (numero === null){
    console.log('(2) La variable `numero` es null.')
}

numero = null;

if (numero === null){
    console.log('(3) La variable `numero` es null.')
}

if (numero === undefined){
    console.log('(3.1) La variable `numero` es undefined.')
}

// ! (bang)

if (!numero){
    console.log('(4) La variable `numero` es null.')
}
