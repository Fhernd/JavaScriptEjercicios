// Ejercicio 1324: Contar el número de ocurrencias de una subcadena en una cadena de caracteres.

function contarOcurrencias(texto, subtexto) {
    subtexto = subtexto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    return (texto.match(new RegExp(subtexto, 'gi')) || []).length;
}

let frase = 'JavaScript es tremendo. JavaScript permite la creación de aplicaciones Web.';

console.log(contarOcurrencias(frase, 'JavaScript'));    // 2
