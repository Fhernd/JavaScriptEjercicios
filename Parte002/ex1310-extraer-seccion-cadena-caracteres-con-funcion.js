// Ejercicio 1310: Extraer una sección de una cadena de caracteres con la función slice().

let frase = 'JavaScript es tremendo';
console.log(frase);
console.log(frase.length);

console.log();

let resultado = frase.slice(0, 10);
console.log(resultado); // 'JavaScript'
console.log(resultado.length); // 10

console.log();

resultado = frase.slice(11, 13);
console.log(resultado);
console.log(resultado.length);
