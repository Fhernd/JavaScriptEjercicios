// Ejercicio 699: Comprobar que una cadena contenga las letras a y c separadas por tres caracteres.

function aCSeparadas(texto) {
    if (texto.length >= 5) {
        return (/a...c/).test(texto) || (/c...a/).test(texto);
    } else {
        return false;
    }
}

console.log(aCSeparadas('Avión'));  // false
console.log(aCSeparadas('JavaScript'));  // true
console.log(aCSeparadas('aplico'));  // true
console.log(aCSeparadas('contagio'));  // true
console.log(aCSeparadas('anuncio'));  // true
console.log(aCSeparadas('anunciada'));  // true
console.log(aCSeparadas('caracteres'));  // true
