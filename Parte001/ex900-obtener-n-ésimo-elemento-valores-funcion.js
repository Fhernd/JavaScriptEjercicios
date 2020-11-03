// Ejercicio 900: Crear una función para obtener el enésimo elemento de una colección de valores.

function obtenerEnesimoElemento(n) {
    return (...elementos) => elementos.slice(n)[0];
}

let tercerElemento = obtenerEnesimoElemento(2);
console.log(tercerElemento(1, 2, 3, 4, 5)); // 3
console.log(tercerElemento('JavaScript', 'Python', 'Java', 'C++', 'Kotlin')); // 'Java'

console.log();

console.log(tercerElemento(2, 3)); // undefined

console.log();

let segundoElemento = obtenerEnesimoElemento(1);
console.log(segundoElemento(1, 2, 3, 4, 5)); // 2
console.log(segundoElemento('JavaScript', 'Python', 'Java', 'C++', 'Kotlin')); // 'Python'
