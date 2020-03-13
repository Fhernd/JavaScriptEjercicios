// Ejercicio 533: Asociar un objeto iterador a un arreglo de elementos con Symbol.iterator.

let lenguajes = ['JavaScript', 'Java', 'C++', 'C', 'PHP', 'Perl', 'C#', 'Python']

let iterador = lenguajes[Symbol.iterator]();

console.log('Tipo de dato de la variable `iterador`:', typeof iterador);
console.log(typeof iterador[Symbol.iterator] === 'function');

console.log();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
