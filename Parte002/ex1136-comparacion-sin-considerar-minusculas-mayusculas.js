// Ejercicio 1136: Comparar cadenas de caracteres sin considerar minúsculas o mayúsculas.

// JavaScript
// javascript
// JAVASCRIPT

function sonCadenasIguales(texto1, texto2) {
    if (texto1.constructor != String || texto2.constructor != String) {
        return null;
    }

    return texto1.toLowerCase() == texto2.toLowerCase();
}

console.log(sonCadenasIguales('JavaScript', 'javascript')); // true
console.log(sonCadenasIguales('JavaScript', 'JAVASCRIPT')); // true
console.log(sonCadenasIguales('JavaScript', 'jAvAsCrIpt')); // true

console.log();

console.log(sonCadenasIguales('JavaScript', 'javascript ')); // false
console.log(sonCadenasIguales('JavaScript', ' JAVASCRIPT')); // false
console.log(sonCadenasIguales('JavaScript', 'jAvAs CrIpt')); // false
