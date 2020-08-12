// Ejercicio 703: Crear una función para separar una frase en palabras usando una expresión regular.

function separarPalabras(frase) {
    return frase.split(/\s+/g);
}

console.log(separarPalabras('JavaScript es un lenguaje de programación'));
console.log(separarPalabras('JavaScript           es un    lenguaje  de            programación'));
