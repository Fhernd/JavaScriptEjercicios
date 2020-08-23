// Ejercicio 777: Usar el método estático Array.isArray() para comprobar si una variable o literal es un arreglo.

// Array.isArray() : true

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(Array.isArray([[[[[5]]]]]));
console.log(Array.isArray([]));
console.log(Array.isArray(Array()));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array(0)));
console.log(Array.isArray(new Array(1000)));

console.log();

let lenguajes = ['JavaScript', 'C++', 'Java', 'Python'];
console.log(Array.isArray(lenguajes));
lenguajes = [];
console.log(Array.isArray(lenguajes));

console.log();
console.log();

// Array.isArray() : false

console.log(Array.isArray(''));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray({}));
console.log(Array.isArray({lenguaje: 'JavaScript'}));
console.log(Array.isArray(``));
console.log(Array.isArray(false));
console.log(Array.isArray(true));

console.log();

lenguajes = '[Python, Java, C++, JavaScript]';
console.log(Array.isArray(lenguajes));

console.log();
console.log();

// Operador instanceof

console.log([1, 2, 3] instanceof Array);
console.log(Array() instanceof Array);
console.log(new Array() instanceof Array);
console.log('' instanceof Array);
