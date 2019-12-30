// Ejercicio 179: Iterar un arreglo con el ciclo do...while.

let numeros = [3, 5, 7, 2, 11, 13, 0, 19, 23, 29];

let indice = 0;

do{
    console.log(numeros[indice]);

    ++indice;
} while(numeros[indice] != 0);
