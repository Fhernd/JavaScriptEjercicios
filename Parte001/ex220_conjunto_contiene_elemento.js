// Ejercicio 220: Comprobar si un conjunto contiene un elemento específico con has().

let lenguajes = new Set();
lenguajes.add('Java');
lenguajes.add('C++');
lenguajes.add('C');
lenguajes.add('PHP');
lenguajes.add('Python');

console.log(lenguajes);

console.log(lenguajes.has('JavaScript'));

console.log();

lenguajes.add('JavaScript');
console.log(lenguajes.has('JavaScript'));
