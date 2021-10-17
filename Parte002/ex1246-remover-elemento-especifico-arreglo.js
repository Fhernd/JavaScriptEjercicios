// Ejercicio 1246: Remover un elemento específico de un arreglo con las funciones indexOf() y splice().

let lenguajes = ['JavaScript', 'C++', 'Python', 'PHP', 'Go', 'Kotlin'];
console.log(lenguajes);
console.log(lenguajes.length);  // 6

console.log();

let lenguaje = 'PHP';
let indice = lenguajes.indexOf(lenguaje);

if (indice != -1) {
    lenguajes.splice(indice, 1);

    console.log(lenguajes); // ['JavaScript', 'C++', 'Python', 'Go', 'Kotlin']
    console.log(lenguajes.length);  // 5
} else {
    console.log('No se ha encontrado el valor buscado.');
}
