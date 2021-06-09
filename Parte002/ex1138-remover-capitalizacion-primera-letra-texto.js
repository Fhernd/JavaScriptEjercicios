// Ejercicio 1138: Remover capitalización de la primera letra de un texto con la función charAt().

let texto = 'JavaScript es un lenguaje de programación'
console.log(texto);

console.log();

let resultado = texto.charAt(0).toLowerCase() + texto.slice(1);
console.log(resultado);
