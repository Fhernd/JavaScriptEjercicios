// Ejercicio 69: Eliminar una propiedad de un objeto por medio del operador delete.

let computador = {id: 1001, procesador: 'Intel Core i7', ram: 32};

console.log(`El computador tiene ${computador.ram} GB de RAM`);

console.log(delete computador.ram);

console.log(`El computador tiene ${computador.ram} GB de RAM`);
