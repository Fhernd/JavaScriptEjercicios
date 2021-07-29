// Ejercicio 1201: Usar el operador delete para eliminar una llave (atributo) de un objeto.

let computador = {
    id: 1001,
    marca: 'Apple',
    ram: 16,
    procesador: 'Intel Core i5'
}

console.log(computador);

console.log();

console.log(computador.procesador);

console.log();

delete computador.procesador;

console.log(computador);

console.log();

console.log(computador.procesador); // undefined
