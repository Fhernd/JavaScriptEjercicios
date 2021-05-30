// Ejercicio 1099: Validar si una cadena de caracteres se encuentra vacía (cero caracteres).

let texto = 'JavaScript';

console.log(texto);
console.log(`La longitud actual de texto es: ${texto.length}`);

console.log();

texto = '     JavaScript     ';
console.log(texto);
console.log(`La longitud actual de texto es: ${texto.length}`);

console.log();

texto = '     JavaScript     ';
console.log(texto.trim());  // JavaScript
console.log(`La longitud actual de texto es: ${texto.trim().length}`);  // 10

console.log();

texto = '          ';
console.log(texto);  // '          '
console.log(`La longitud actual de texto es: ${texto.length}`);  // 10

console.log();

texto = '          ';
console.log(texto.trim());  // ''
console.log(`La longitud actual de texto es: ${texto.trim().length}`);  // 0

console.log();

texto = texto.trim();

if (texto.length === 0) {
    console.log('El contenido de la cadena texto es igual a 0.');
}

console.log();

if (!texto.length) {
    console.log('El contenido de la cadena texto es igual a 0.');
}

// Java: isEmpty()
