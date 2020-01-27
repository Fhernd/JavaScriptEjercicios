// Ejercicio 383: Comprender el concepto de hoisting en la declaración de funciones.

// hoisting ~= colocar/desplazar/mover arriba


console.log(sumar(2, 3));

function sumar(a, b){
    return a + b;
}

console.log(sumar(7, 3));

console.log();

// console.log(restar(5, 3));

let restar = function(a, b) {
    return a - b;
};

console.log(restar(5, 3));
