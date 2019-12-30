// Ejercicio 11: Resolver problemas de referencia de variables.

// Error típico:
// ReferenceError: «identificador»  is not defined

// console(mensaje); // ReferenceError: «identificador»  is not defined

function mostrarSaludo(){
    var mensaje = 'Hola... Este código se ejecuta en una función';

    console.log(mensaje);
}

// console.log(mensaje); // ReferenceError: «identificador»  is not defined

var numero = 7;

function mostrarNumero(){
    console.log('El número es: ' + numero);
}

mostrarNumero();
