// Ejercicio 185: Validar que al menos un elemento de un arreglo cumple una condición.

// some

let numeros = [3, 5, 7, 1, 0, 3, -1, 8];

console.log(numeros);

let resultado = numeros.some((valor) => {
    return valor > 10;
});

console.log(resultado);

console.log();

resultado = numeros.some((valor) => {
    return valor <= 0;
});

console.log(resultado);
