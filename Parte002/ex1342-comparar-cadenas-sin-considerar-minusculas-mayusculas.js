// Ejercicio 1342: Comparar cadenas de caracteres sin considerar minúsculas y mayúsculas.

function sonCadenasIguales(texto1, texto2) {
    return texto1.toLowerCase() === texto2.toLowerCase();
}

console.log(sonCadenasIguales('abc', 'ABC'));   // true
console.log(sonCadenasIguales('AbC', 'ABC'));   // true
console.log(sonCadenasIguales('AbC', 'ABCD'));   // false
