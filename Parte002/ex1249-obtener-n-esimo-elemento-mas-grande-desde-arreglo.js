// Ejercicio 1249: Definir una función para obtener el n-ésimo elemento más grande de un arreglo.

function obtenerNEsimoElementoMasGrande(numeros, n=1) {
    numeros.sort((a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });

    return numeros[n - 1];
}

let numeros = [11, 13, 2, 5, 3, 7];

console.log(obtenerNEsimoElementoMasGrande(numeros));   // 2
console.log(obtenerNEsimoElementoMasGrande(numeros, 4));   // 7
