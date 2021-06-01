// Ejercicio 1117: Validar a través de una función si una cadena es palíndromo.

// oso
// ana
// la tele letal => lateleletal

function esPalindromo(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/\s*/g, '');

    return texto == texto.split('').reverse().join('');
}

console.log(esPalindromo('oso'));   // true
console.log(esPalindromo('revolver'));   // false
console.log(esPalindromo('la tele letal')); // true
console.log(esPalindromo('la Tele Letal')); // true
