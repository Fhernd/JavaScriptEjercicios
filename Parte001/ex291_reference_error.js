// Ejercicio 291: Atrapar un error tipo ReferenceError con try...catch.

try{
    let resultado = 5/a;
} catch(ReferenceError){
    console.log('Se ha producido una excepción ReferenceError')
}

console.log('...');
