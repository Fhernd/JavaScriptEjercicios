/*jshint esversion:5, eqeqeq:false, maxparams:2 */

// Ejercicio 453: Escribir opciones de análisis estático de código con JSHint en el mismo archivo JS.

function sumar(a, b){
    return a + b;
}

// curly
var contador = 0;
while(contador <= 10){
    ++contador;
}

// eqeqeq
if (contador == 10){
    console.log('La variable contador es igual a 10.');
} else {
    console.log('La variable contador NO es igual a 10.');
}
