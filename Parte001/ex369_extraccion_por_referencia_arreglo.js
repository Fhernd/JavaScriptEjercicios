// Ejercicio 369: Extraer los elementos de un arreglo por referencia usando slice().

let productos = [];
productos[0] = {id: 1, nombre: 'Mouse', precio: 29.9};
productos[1] = {id: 2, nombre: 'Teclado', precio: 79.9};
productos[2] = {id: 3, nombre: 'Audífonos', precio: 19.9};
productos[3] = {id: 4, nombre: 'Parlantes', precio: 39.9};
productos[4] = {id: 5, nombre: 'Monitor', precio: 299.9};

console.log(productos);

console.log();

let resultado = productos.slice(1, 4);
console.log(resultado.length);
console.log(resultado);

console.log();

console.log(resultado[0].nombre, resultado[0].precio);
resultado[0].precio = 85.7;
console.log(resultado[0].nombre, resultado[0].precio);

console.log();

console.log(productos[1].nombre, productos[1].precio);
