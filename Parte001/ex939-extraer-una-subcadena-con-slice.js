// Ejercicio 939: Extraer una subcadena de caracteres usando el método slice().

let frase = 'JavaScript es un lenguaje de programación.';

let subfrase = frase.slice(0, 10);
console.log(subfrase);
console.log(typeof subfrase);
console.log(subfrase.length);

console.log();

subfrase = frase.slice(4, 10);
console.log(subfrase);
console.log(subfrase.length);

console.log();

subfrase = frase.slice(29);
console.log(subfrase);
console.log(subfrase.length);

console.log();

subfrase = frase.slice(29, -1);
console.log(subfrase);
console.log(subfrase.length);

console.log();

subfrase = frase.slice(-13);
console.log(subfrase);
console.log(subfrase.length);

console.log();

subfrase = frase.slice(-13, -1);
console.log(subfrase);
console.log(subfrase.length);
