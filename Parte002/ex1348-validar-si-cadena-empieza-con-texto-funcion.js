// Ejercicio 1348: Validar si un texto empieza con una cadena de caracteres específica.

// JS es tremendo
// JS
// => true
// js
// => false

function textoEmpiezaCon(texto, subtexto) {
    return texto.indexOf(subtexto) === 0;
}

console.log(textoEmpiezaCon('JS estremendo', 'JS'));    // true
console.log(textoEmpiezaCon('JS estremendo', ' JS'));    // false
