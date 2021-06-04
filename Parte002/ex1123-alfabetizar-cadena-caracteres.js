// Ejercicio 1123: Crear una función para alfabetizar una cadena de caracteres.

// JavaScript
// JSaaciprtv

function alfabetizarCadena(texto) {
    if (texto.constructor != String) {
        return null;
    }

    return texto.split('').sort().join('').trim();
}

console.log(alfabetizarCadena('JavaScript'));   // JSaaciprtv
console.log(alfabetizarCadena('Python'));   // Phnoty
console.log(alfabetizarCadena(42));   // null
