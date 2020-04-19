// Ejercicio 642: Uso de la clase Set como estructura de datos para representar conjuntos.

let lenguajes = new Set();

lenguajes.add('JavaScript');
lenguajes.add('Python');

console.log(`Cantidad de elementos del conjunto lenguajes:`, lenguajes.size);
console.log(lenguajes);

console.log();

lenguajes.add('C++').add('PHP').add('C#');

console.log(`Cantidad de elementos del conjunto lenguajes:`, lenguajes.size);
console.log(lenguajes);

console.log();

lenguajes.add('Python');
lenguajes.add('javascript');

console.log(`Cantidad de elementos del conjunto lenguajes:`, lenguajes.size);
console.log(lenguajes);

console.log();

for(let llave of lenguajes.values()) {
    console.log(llave);
}
