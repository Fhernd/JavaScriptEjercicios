// Ejercicio 186: Aplicar un filtro sobre un arreglo para obtener los elementos que cumplan una condición.

// filter()

let numeros = [7, 3, 2, 0, 5, 11, 13, -5];

console.log(numeros);

let resultado = numeros.filter((valor) => {
    return valor >= 5;
});

console.log(resultado);
