// Ejercicio 672: Extraer los últimos 3 caracteres de una cadena y ubicarlos al inicio y final de la misma.

function extraer3Caracteres(texto) {
    if (texto.length >= 3) {
        let ultimos3Caracteres = texto.substring(texto.length - 3);

        return ultimos3Caracteres + texto + ultimos3Caracteres;
    } else {
        return texto;
    }
}

console.log(extraer3Caracteres('C++')); // C++C++C++
console.log(extraer3Caracteres('Go')); // Go
console.log(extraer3Caracteres('Python')); // honPythonhon
