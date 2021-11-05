// Ejercicio 1331: Alfabetizar una cadena de caracteres usando una función personalizada.

// JavaScript
// JSaacprtv

function alfabetizarCadena(cadena) {
    return cadena.split('').sort().join('').trim();
}

console.log(alfabetizarCadena('JavaScript'));   // JSaaciprtv
console.log(alfabetizarCadena('John'));   // Jhno
