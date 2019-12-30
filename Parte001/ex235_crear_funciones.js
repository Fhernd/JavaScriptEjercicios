// Ejercicio 235: Crear una función con un constructor, una declaración o una expresión.

// Constructor:

let funcionConstructor = new Function('a', 'b', 'return a + b');

console.log(funcionConstructor(2, 3));

console.log();

// Declaración:

function sumar(a, b){
    return a + b;
}

console.log(sumar(2, 3));

console.log();

// Expresión:

let sumarExpresion = function(a, b){
    return a + b;
};

console.log(sumarExpresion(2, 3));
