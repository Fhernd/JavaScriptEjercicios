// Ejercicio 1449: Implementar el algoritmo de búsqueda binaria en una función a la medida.

function busquedaBinaria(datos, valor) {
    let izquierda = 0;
    let derecha = datos.length - 1;

    while (izquierda <= derecha) {
        let mitad = Math.floor((izquierda + derecha) / 2);
        let dato = datos[mitad];

        if (dato == valor) {
            return mitad;
        } else if (valor > dato) {
            izquierda = mitad + 1;
        } else {
            derecha = mitad - 1;
        }
    }

    return -1;
}

let primos = [2, 3, 5, 7, 11, 13, 17, 19];
let numero = 19;
console.log(busquedaBinaria(primos, numero));   // 7

console.log();

numero = 5;
console.log(busquedaBinaria(primos, numero));   // 2

console.log();

numero = 23;
console.log(busquedaBinaria(primos, numero));   // -1
