// Ejercicio 1001: Definir una función implementar el algoritmo de ordenamiento merge-sort.

Array.prototype.mergeSort = function() {
    if (this.length <= 1) {
        return this;
    }

    let mitad = parseInt(this.length / 2);
    let izquierda = this.slice(0, mitad).mergeSort();
    let derecha = this.slice(mitad, this.length).mergeSort();

    let merge = function(izquierda, derecha) {
        let datos = [];

        while(izquierda.length > 0 && derecha.length > 0) {
            datos.push(izquierda[0] <= derecha[0] ? izquierda.shift() : derecha.shift())
        }

        return datos.concat(izquierda).concat(derecha);
    }

    return merge(izquierda, derecha);
}

let numeros = [11, 7, 19, 3, 23, 2, 5, 29, 23];
console.log(numeros);
numeros.mergeSort();
console.log(numeros);
console.log();

let resultado = numeros.mergeSort();
console.log(resultado);
