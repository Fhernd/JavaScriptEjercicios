// Ejercicio 988: Determinar si una cadena de caracteres dada es un palíndromo.

// lateleletal
// => lateleletal (invertida)
// true

function esPalindromo(texto) {
    return texto.split('').reverse().join('') == texto;
}

console.log(esPalindromo('lateleletal'));   // true
console.log(esPalindromo('amadaladama'));   // true
console.log(esPalindromo('revolver'));   // false
console.log(esPalindromo('1001'));   // true
