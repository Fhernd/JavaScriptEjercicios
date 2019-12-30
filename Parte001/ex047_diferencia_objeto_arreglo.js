// Ejercicio 47: Averiguar la diferencia entre un objeto y un arreglo.

var lenguajes = ['JavaScript', 'Python', 'Java'];

var persona = {nombre: 'Edward', apellido: 'Ortiz', codigo: 123456};

console.log(lenguajes[0]);
console.log(persona.nombre); // persona['nombre']

// Object.keys
console.log(Object.keys(persona));
