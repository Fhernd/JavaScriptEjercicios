// Ejercicio 191: Contar las ocurrencias de los elementos de un arreglo con forEach.

// Solución:

let numeros = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 6, 7, 8];

let conteo = {};

numeros.forEach((valor) => {
    if(conteo[valor]){
        conteo[valor] += 1;
    } else {
        conteo[valor] = 1;
    }
});

console.log(numeros);

console.log(conteo);
