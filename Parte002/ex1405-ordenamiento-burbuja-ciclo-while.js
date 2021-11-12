// Ejercicio 1405: Usar el ordenamiento burbuja para ordenar un conjunto de números enteros.

Array.prototype.ordenarDatosBurbuja = function() {
    let ordenado = false;

    while(!ordenado) {
        ordenado = true;

        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                let temporal = this[i + 1];
                this[i + 1] = this[i];
                this[i] = temporal;

                ordenado = false;
            }
        }
    }

    return this;
}

let numeros = [7, 2, 5, 13, 11, 29, 23];
console.log(numeros);

console.log();

let numerosOrdenados = numeros.ordenarDatosBurbuja();

console.log(numerosOrdenados);  // [2, 5, 7, 11, 13, 23, 29];
