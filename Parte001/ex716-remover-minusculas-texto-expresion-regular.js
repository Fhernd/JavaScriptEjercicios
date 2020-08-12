// Ejercicio 716: Remover las letras minúsculas de un texto usando una expresión regular.

function removerMinusculas(texto) {
    return texto.replace(/[a-z]/g, '');
}

console.log(removerMinusculas('JavaScript'));   // JS
console.log(removerMinusculas('Python'));   // P
console.log(removerMinusculas('JavaScript es un lenguaje de programación'));   // JS     
