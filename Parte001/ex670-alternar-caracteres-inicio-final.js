// Ejercicio 670: Alternar el primer y último carácter de una cadena de caracteres.

function alternarPrimerUltimoCaracteres(texto) {
    if (texto.length >= 2) {
        let primerCaracter = texto[0];
        let ultimoCaracter = texto[texto.length - 1];

        texto = ultimoCaracter + texto.substring(1, texto.length - 1) + primerCaracter;

        return texto;
    } else {
        return texto;
    }
}

let lenguaje = 'tavaScripJ';
console.log(lenguaje);
console.log(alternarPrimerUltimoCaracteres(lenguaje));

console.log();

console.log(alternarPrimerUltimoCaracteres('BA'));  // AB
