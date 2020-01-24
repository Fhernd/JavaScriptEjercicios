// Ejercicio 362: Uso del método findIndex() para encontrar el índice de un elemento que cumpla una condición.

let numeros = [13, 5, 89, 2, 7, 19, 23, 3, 79, 61, 101, 43, 41];

let indice = numeros.findIndex((n) => {
    return n > 100;
});

if (indice != -1){
    console.log(indice);
    console.log(numeros[indice]);
} else {
    console.log('No se ha encontrado ningún elemento cumpla la condición.');
}
