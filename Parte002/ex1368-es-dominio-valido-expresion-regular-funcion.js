// Ejercicio 1368: Con una expresión regular comprobar si un dato es un dominio válido.

// www.google.com
// www.wolframalpha.com

function esDominioValido(texto) {
    let patron = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;

    return patron.test(texto);
}

console.log(esDominioValido('www.google.com')); // true
console.log(esDominioValido('www.wolframalpha.com'));   // true

console.log();

console.log(esDominioValido('www.wolframalpha.com:3306'));   // false
console.log(esDominioValido('https://www.wolframalpha.com'));   // false
