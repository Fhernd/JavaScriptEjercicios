// Ejercicio 715: Remover las letras mayúsculas de un texto usando una expresión regular.

function removerMayusculas(texto) {
    return texto.replace(/[A-Z]/g, '');
}

console.log(removerMayusculas('JavaScript'));   // avacript
console.log(removerMayusculas('PHP'));   // ''
console.log(removerMayusculas('Python es un Lenguaje de Programación'));
