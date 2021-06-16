// Ejercicio 1144: Validar si una cadena de caracteres empieza en un texto específico.

let frase = 'JavaScript es tremendo';

let lenguaje = 'JavaScript';

let indice = frase.indexOf(lenguaje);

let resultado = indice == 0;

console.log(resultado); // true

console.log();

lenguaje = 'javaScript';
indice = frase.indexOf(lenguaje);
resultado = indice == 0;

console.log(resultado); // false
