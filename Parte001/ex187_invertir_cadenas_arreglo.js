// Ejercicio 187: Invertir todas las cadenas de un arreglo con la función map de Array.

let lenguajes = ['JavaScript', 'C#', 'PHP', 'Java', 'C++'];

let resultado = lenguajes.map((valor) => {
    return valor.split('').reverse().join('');
});

console.log(lenguajes);
console.log(resultado);
