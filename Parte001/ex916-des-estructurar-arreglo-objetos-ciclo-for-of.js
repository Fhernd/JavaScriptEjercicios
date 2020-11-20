// Ejercicio 916: Usar el mecanismo de desestructuración para iterar por alguna propiedad de varios objetos.

let computadores = [
    {id: 1001, marca: 'MSi', precio: 799},
    {id: 1002, marca: 'Apple', precio: 900},
    {id: 1003, marca: 'Clone', precio: 4000}
];

let total = 0;

for(const {precio} of computadores) {
    total += precio;
}

console.log(`Todos los ${computadores.length} computadores cuestan ${total}.`);
