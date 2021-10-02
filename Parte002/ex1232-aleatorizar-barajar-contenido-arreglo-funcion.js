// Ejercicio 1232: Aleatorizar el contenido de un arreglo de datos con una función.

function aleatorizar(datos) {
    let contador = datos.length;
    let temporal;
    let indice;

    while(contador > 0) {
        indice = Math.floor(Math.random() * contador);

        --contador;

        temporal = datos[contador];
        datos[contador] = datos[indice];
        datos[indice] = temporal;
    }
}

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log();

aleatorizar(numeros);
console.log(numeros);
