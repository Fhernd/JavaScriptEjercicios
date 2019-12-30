// Ejercicio 222: Recorrer un conjunto con un iterador tipo Symbol.iterator.

let lenguajes = new Set(['Java', 'C++', 'C++', 'C', 'PHP', 'C#']);

console.log(lenguajes);

let iterador = lenguajes[Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
