// Ejercicio 329: Reemplazar patrones de cadenas con nuevo texto usando el método replace().

let texto = 'Kotlin es tremendo. Python es genial.';
console.log(texto);

// let expresionRegular = /\b[A-Z][a-z]{5}\b/g;
let expresionRegular = new RegExp('[A-Z][a-z]{5}', 'g');

let resultado = texto.replace(expresionRegular, 'JavaScript');
console.log(resultado);
