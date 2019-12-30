// Ejercicio 83: Concatenar cadenas de caracteres por medio de plantillas y el operador +.

let cadena1 = 'JavaScript es ';
let cadena2 = 'tremendo';

console.log(cadena1);
console.log(cadena2);

let frase = cadena1 + cadena2;

console.log(frase);

console.log();

let lenguaje = 'JavaScript';

frase = `${lenguaje} es un lenguaje de programación.`

console.log(frase);

console.log();

let nombre = 'John';
let email = 'john@mail.com';
frase = `Su nombre es: ${nombre}. Su email: ${email}`;
console.log(frase);

nombre = 'Angela';
email = 'angela@mail.com';
frase = `Su nombre es: ${nombre}. Su email: ${email}`;
console.log(`Su nombre es: ${nombre}. Su email: ${email}`);
