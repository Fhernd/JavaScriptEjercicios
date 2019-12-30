// Ejercicio 96: Uso del método match de la clase String.

var paragraph = 'The quick brown fox jumps over the lazy dog. It barked. There are 2 dogs and 1 fox';
var regex = /[0-9]/g;
var found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "F", "I"]
