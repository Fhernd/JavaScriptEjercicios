// Ejercicio 529: Realizar operaciones básicas sobre conjuntos (clase Set).

let lenguajes = new Set();
lenguajes.add('Python');
lenguajes.add('JavaScript');
lenguajes.add('C++');
lenguajes.add('Java');
lenguajes.add('Java');
lenguajes.add('Java');
lenguajes.add('Java');
lenguajes.add('PHP');
lenguajes.add('C');
lenguajes.add('C');
lenguajes.add('C');
lenguajes.add('C');

console.log('Contenido del conjunto `lenguajes`:', lenguajes);
console.log('Cantidad de elementos del conjunto `lenguajes`:', lenguajes.size);

console.log();

console.log('Iteración del conjunto `lenguajes`:')
lenguajes.forEach((l) => {
    console.log(l);
});

console.log();

let resultado = lenguajes.delete('C');

console.log('Contenido del conjunto `lenguajes`:', lenguajes);
console.log('Cantidad de elementos del conjunto `lenguajes`:', lenguajes.size);
console.log('¿Se eliminó el elemento "C"?:', resultado);

console.log();

resultado = lenguajes.delete('C');

console.log('Contenido del conjunto `lenguajes`:', lenguajes);
console.log('Cantidad de elementos del conjunto `lenguajes`:', lenguajes.size);
console.log('¿Se eliminó el elemento "C"?:', resultado);

console.log();

let existe = lenguajes.has('C');
console.log('¿Existe el elemento "C"?:', existe);

existe = lenguajes.has('Java');
console.log('¿Existe el elemento "Java"?:', existe);
