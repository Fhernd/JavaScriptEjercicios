// Ejercicio 85: Uso del método fromCharCode para crear cadenas UTF.

console.log(String.fromCharCode(189, 43, 190, 61));
// expected output: "½+¾="

let cadena = '\u0041';
console.log(cadena);
console.log(String.fromCharCode(0x41));

console.log(String.fromCharCode(0xA7));

console.log(String.fromCharCode(0x41, 0x42, 0x43));
