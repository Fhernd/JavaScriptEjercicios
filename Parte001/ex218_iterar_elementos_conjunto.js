// Ejercicio 218: Recorrer cada uno de los elementos de un conjunto con un iterador.

let numeros = new Set();

numeros.add(2);
numeros.add(3);
numeros.add(5);
numeros.add(7);
numeros.add(11);
numeros.add(13);

console.log(numeros);
console.log(numeros.size);

console.log();

let iterador = numeros.values();

console.log(iterador);

let valorActual = iterador.next(); 
console.log(valorActual.value);
console.log(valorActual.done);
valorActual = iterador.next(); 
console.log(valorActual.value);
console.log(valorActual.done);
valorActual = iterador.next(); 
console.log(valorActual.value);
console.log(valorActual.done);
valorActual = iterador.next(); 
console.log(valorActual.value);
console.log(valorActual.done);
valorActual = iterador.next(); 
console.log(valorActual.value);
console.log(valorActual.done);
valorActual = iterador.next(); 
console.log(valorActual.value);
console.log(valorActual.done);
valorActual = iterador.next(); 
console.log(valorActual.value);
console.log(valorActual.done);
