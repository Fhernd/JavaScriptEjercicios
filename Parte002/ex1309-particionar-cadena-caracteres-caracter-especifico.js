// Ejercicio 1309: Particionar una cadena de caracteres usando un carácter específico.

let frase = 'JavaScript es tremendo';
console.log(frase);

console.log();

let partes = frase.split(' ');
console.log(partes);    // ['JavaScript', 'es', 'tremendo']
console.log(partes.length);  // 3

console.log();

partes = frase.split();
console.log(partes);    // ['JavaScript', 'es', 'tremendo']
console.log(partes.length);  // 3
