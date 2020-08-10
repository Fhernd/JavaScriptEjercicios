// Ejercicio 684: Crear una función para dejar en minúscula los tres últimos caracteres de un texto.

function ultimos3CaracteresMinuscula(texto) {
    if (texto.length >= 3) {
        let ultimos3Caracteres = texto.substring(texto.length - 3).toLowerCase();
        let primerosCaracteres = texto.substring(0, texto.length - 3);

        return primerosCaracteres + ultimos3Caracteres;
    } else {
        return texto;
    }
}

console.log(ultimos3CaracteresMinuscula(''));   // Cadena vacía
console.log(ultimos3CaracteresMinuscula('PYTHON'));   // PYThon
console.log(ultimos3CaracteresMinuscula('PHP'));   // php
